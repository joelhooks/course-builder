import * as React from 'react'

type IconProperties = {
  className?: string
  viewBox?: string
  title?: string
  role?: string
  size?: '16' | '20' | '24' | '32' | '40'
  name: IconNames
}

const Icons = {
  Palm: () => (
    <path
      fill="#10B981"
      fillRule="evenodd"
      d="M10.605 3.563a5.5 5.5 0 0 1 2.166.856 5.664 5.664 0 0 1 2.29 4.207.729.729 0 0 1-1.126.696L7.463 5.008l-4.93 6.34a.728.728 0 0 1-1.253-.178 4.923 4.923 0 0 1 .5-4.711 6.578 6.578 0 0 1 2.379-2.087l-3.107-.776a.728.728 0 0 1-.279-1.275 5.089 5.089 0 0 1 3.879-1.025 4.03 4.03 0 0 1 2.3 1.528A5.162 5.162 0 0 1 9.84.176a5.261 5.261 0 0 1 4.175.648.729.729 0 0 1-.109 1.272l-3.301 1.467ZM8.378 16a16.06 16.06 0 0 0 .858-5.142 16.007 16.007 0 0 0-.312-3.126l-1.14-.764-.402.517c.264 1.104.398 2.235.399 3.37A14.62 14.62 0 0 1 6.837 16h1.541Z"
      clipRule="evenodd"
    />
  ),
  Anchor: () => (
    <path
      fill="#01AAF4"
      d="m12.143 9.789 1.857.08v1.484c0 1.308-.939 2.502-2.24 2.634A2.503 2.503 0 0 1 9 11.5V5.816a2.992 2.992 0 0 0 1.941-3.417A3.01 3.01 0 0 0 8.565.052 3.005 3.005 0 0 0 5 3c0 1.302.838 2.402 2 2.816v5.537c0 1.308-.939 2.502-2.24 2.634A2.503 2.503 0 0 1 2 11.5V9.869l1.857-.08a.5.5 0 0 0 .255-.916L0 6.131v5.165c0 2.327 1.677 4.415 3.99 4.675 1.628.184 3.087-.524 4.01-1.678.923 1.154 2.382 1.862 4.01 1.678 2.313-.26 3.99-2.348 3.99-4.675V6.13l-4.112 2.742a.5.5 0 0 0 .255.916ZM8 2a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2Z"
    />
  ),
  Checkmark: () => (
    <polygon
      points="0.5,7.5 2,6 5.5,8.5 14,2 15.5,3.5 5.5,13.5"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Playmark: () => (
    <path
      fill="currentColor"
      d="m13.6 7.2-10-7A1 1 0 0 0 2 1v14a1 1 0 0 0 1.6.8l10-7c.5-.4.5-1.2 0-1.6Z"
    />
  ),
  Github: () => (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"
    />
  ),
  Discord: () => (
    <path
      fill="currentColor"
      d="m13.55,2.84c-1.04-.48-2.14-.84-3.3-1.04-.14.26-.31.6-.42.88-1.23-.19-2.45-.19-3.66,0-.11-.28-.28-.62-.43-.88-1.16.2-2.27.55-3.3,1.04C.35,6-.22,9.08.07,12.12c1.39,1.03,2.73,1.66,4.05,2.07.33-.45.62-.93.87-1.43-.48-.18-.93-.4-1.37-.66.11-.08.23-.17.33-.26,2.63,1.23,5.49,1.23,8.09,0,.11.09.22.18.33.26-.43.26-.89.48-1.37.67.25.5.54.98.87,1.43,1.32-.41,2.67-1.04,4.05-2.08.33-3.52-.57-6.57-2.38-9.27Zm-8.21,7.41c-.79,0-1.44-.74-1.44-1.64s.63-1.64,1.44-1.64,1.45.74,1.44,1.64c0,.9-.63,1.64-1.44,1.64Zm5.32,0c-.79,0-1.44-.74-1.44-1.64s.63-1.64,1.44-1.64,1.45.74,1.44,1.64c0,.9-.63,1.64-1.44,1.64Z"
    />
  ),
  Video: () => (
    <path
      d="M16,14V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V14a2,2,0,0,0,2,2H14A2,2,0,0,0,16,14ZM6.258,10.938A.5.5,0,0,1,6,10.5v-5a.5.5,0,0,1,.765-.424l4,2.5a.52.52,0,0,1,0,.848l-4,2.5A.5.5,0,0,1,6.258,10.938Z"
      fill="currentColor"
    />
  ),
  Figma: () => (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.714 2.214c.297-.297.7-.464 1.12-.464h1.583v3.167H5.815a1.583 1.583 0 0 1-1.101-2.703Zm4.203 8.431v2.022a3.083 3.083 0 1 1-5.1-2.334 3.083 3.083 0 0 1 0-4.667A3.088 3.088 0 0 1 2.75 3.334 3.083 3.083 0 0 1 5.833.25H10.5a3.084 3.084 0 0 1 2.016 5.417 3.105 3.105 0 0 1 .833 1.153 3.084 3.084 0 0 1-4.432 3.825ZM4.714 6.88a1.583 1.583 0 0 1 1.1-.463h1.603v3.166H5.833a1.583 1.583 0 0 1-1.12-2.703Zm0 4.667c.297-.297.7-.463 1.12-.463h1.583v1.583a1.583 1.583 0 1 1-2.703-1.12Zm5.786-5.13h-.022a1.583 1.583 0 1 0 .04 0H10.5Zm.606-1.62a1.583 1.583 0 0 1-.587.12H8.917V1.75H10.5a1.583 1.583 0 0 1 .606 3.046Z"
      clipRule="evenodd"
    />
  ),
  Trophy: () => (
    <path
      fill="currentColor"
      d="M0 0v4c0 2.065 1.604 4 4.141 4a3.983 3.983 0 0 0 2.65 2.793c-.179.938-.509 2.111-1.124 3.207H4v2h8v-2h-1.667c-.615-1.096-.945-2.27-1.123-3.207A3.984 3.984 0 0 0 11.859 8C14.388 8 16 6.072 16 4V0H0Zm2 4V2h2v4c-1.103 0-2-.897-2-2Zm12 0c0 1.103-.898 2-2 2V2h2v2Z"
    />
  ),
  Calendar: () => (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5 5.5h15m-1.5-3H2A1.5 1.5 0 0 0 .5 4v9A1.5 1.5 0 0 0 2 14.5h12a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 14 2.5ZM4.5.5v2m7-2v2"
    />
  ),
  Dollar: () => (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 .5v15M11.5 3C9.5 1.992 4 1.539 4 5c0 3.525 8 2.005 8 6 0 3.387-5.716 3.2-8 2"
    />
  ),
  Email: () => (
    <>
      <g clipPath="url(#a)">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.882 14.794c-1.713.655-6.942 1.725-9.777-1.538C-.643 10.1.55 5.311 2.607 2.919a8.265 8.265 0 0 1 9.069-1.794 6.185 6.185 0 0 1 3.811 6.351c-.118 1.823-.679 3.788-2.511 3.93-1.832.142-2.128-1.567-2.246-2.393m0 0c.017-1.458.126-2.913.325-4.357-4.017-1.224-5.435.912-5.878 2.221-.443 1.309-.591 3.36 1.063 4.243 1.654.883 3.84-.256 4.49-2.107Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </>
  ),
  PlayOutline: () => (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="m2.5.5 12 7.5-12 7.5V.5Z"
    />
  ),
  Receipt: () => (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M13.5.5h-11a1 1 0 0 0-1 1v14l2.5-2 2 2 2-2 2 2 2-2 2.5 2v-14a1 1 0 0 0-1-1Zm-9 5h7m-7 4h7"
    />
  ),
  Team: () => (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 3a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Zm5.341-.5a3 3 0 0 1 4.659 2.5v1h-3"
    />
  ),
  Twitter: () => (
    <path
      fill="currentColor"
      d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"
    />
  ),
  Gitpod: () => (
    <path
      fill="currentColor"
      d="M9.355.797a1.591 1.591 0 0 1-.58 2.156L4.122 5.647a.401.401 0 0 0-.2.348v4.228a.4.4 0 0 0 .2.347l3.683 2.133a.39.39 0 0 0 .39 0l3.685-2.133a.4.4 0 0 0 .2-.347v-2.63L8.766 9.485a1.55 1.55 0 0 1-2.127-.6 1.592 1.592 0 0 1 .593-2.153l4.739-2.708c1.443-.824 3.228.232 3.228 1.91v4.61a3.015 3.015 0 0 1-1.497 2.612l-4.23 2.448a2.937 2.937 0 0 1-2.948 0l-4.229-2.448A3.016 3.016 0 0 1 .8 10.544v-4.87A3.016 3.016 0 0 1 2.297 3.06L7.225.208a1.55 1.55 0 0 1 2.13.589Z"
    />
  ),
  MoveDown: () => (
    <g
      strokeWidth="1"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12.5" y1="0.5" x2="12.5" y2="15.5" stroke="currentColor" />
      <polyline points="15.5 12.5 12.5 15.5 9.5 12.5" stroke="currentColor" />
      <polyline points="0.5 2.5 0.5 0.5 2.5 0.5" />
      <polyline points="2.5 6.5 0.5 6.5 0.5 4.5" />
      <polyline points="6.5 4.5 6.5 6.5 4.5 6.5" />
      <polyline points="4.5 0.5 6.5 0.5 6.5 2.5" />
      <rect x="0.5" y="9.5" width="6" height="6" />
    </g>
  ),
} as const

type IconNames = keyof typeof Icons

const Icon: React.FC<IconProperties> = ({
  viewBox = '0 0 16 16',
  title,
  size = '16',
  name,
  role = 'img',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    aria-hidden={!title}
    role={role}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    {Icons[name]()}
  </svg>
)

export { Icon, type IconNames }
