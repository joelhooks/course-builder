import { describe, expect, it } from 'vitest'

import { determineOrgAccess, OrganizationRole } from './determine-org-access'

describe('determineOrgAccess', () => {
	const createRole = (
		overrides: Partial<OrganizationRole> = {},
	): OrganizationRole => ({
		active: true,
		name: 'member',
		organizationId: 'org-1',
		...overrides,
	})

	it('redirects when no roles exist', () => {
		expect(determineOrgAccess([], 'org-1')).toEqual({
			action: 'REDIRECT_TO_ORG_LIST',
		})
	})

	it('redirects when roles exist but none are active', () => {
		const roles = [createRole({ active: false })]
		expect(determineOrgAccess(roles, 'org-1')).toEqual({
			action: 'REDIRECT_TO_ORG_LIST',
		})
	})

	it('redirects when no matching org role and no owner role', () => {
		const roles = [createRole({ organizationId: 'org-2' })]
		expect(determineOrgAccess(roles, 'org-1')).toEqual({
			action: 'REDIRECT_TO_ORG_LIST',
		})
	})

	it('uses owner org when no valid current role exists', () => {
		const roles = [
			createRole({ name: 'owner', organizationId: 'owner-org' }),
			createRole({ organizationId: 'org-2' }),
		]
		expect(determineOrgAccess(roles, 'org-1')).toEqual({
			action: 'SET_OWNER_ORG',
			organizationId: 'owner-org',
		})
	})

	it('uses current org when valid role exists', () => {
		const roles = [createRole()]
		expect(determineOrgAccess(roles, 'org-1')).toEqual({
			action: 'USE_CURRENT_ORG',
			organizationId: 'org-1',
		})
	})

	it('prefers current org over owner org when both exist', () => {
		const roles = [
			createRole(),
			createRole({ name: 'owner', organizationId: 'owner-org' }),
		]
		expect(determineOrgAccess(roles, 'org-1')).toEqual({
			action: 'USE_CURRENT_ORG',
			organizationId: 'org-1',
		})
	})

	it('handles undefined currentOrgId', () => {
		const roles = [createRole({ name: 'owner', organizationId: 'owner-org' })]
		expect(determineOrgAccess(roles, undefined)).toEqual({
			action: 'SET_OWNER_ORG',
			organizationId: 'owner-org',
		})
	})
})