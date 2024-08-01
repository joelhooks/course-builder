import * as React from 'react'

type IconProperties = {
	className?: string
	viewBox?: string
	title?: string
	role?: string
	size?: '16' | '20' | '24' | '32' | '40' | '48'
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
	ClosingTag: () => (
		<g>
			<path
				stroke="#3CF686"
				strokeLinecap="round"
				strokeWidth="2"
				d="M28.666 20l.23.229c1.777 1.777 2.666 2.666 2.666 3.771s-.889 1.994-2.667 3.771l-.229.229m-2.94-10.44L24 24l-1.725 6.44M19.333 20l-.228.229c-1.778 1.777-2.667 2.666-2.667 3.771s.889 1.994 2.667 3.771l.228.229"
			></path>
			<path
				stroke="#fff"
				strokeWidth="2"
				d="M10.666 24c0-6.286 0-9.428 1.953-11.38 1.953-1.954 5.095-1.954 11.38-1.954 6.286 0 9.429 0 11.381 1.953 1.953 1.953 1.953 5.095 1.953 11.38 0 6.286 0 9.429-1.953 11.381-1.952 1.953-5.095 1.953-11.38 1.953-6.286 0-9.428 0-11.38-1.953-1.954-1.952-1.954-5.095-1.954-11.38z"
				opacity="0.5"
			></path>
			<g filter="url(#a)">
				<path
					stroke="#3CF686"
					strokeLinecap="round"
					strokeWidth="2"
					d="M28.666 20l.23.229c1.777 1.777 2.666 2.666 2.666 3.771s-.889 1.994-2.667 3.771l-.229.229"
				></path>
			</g>
			<g filter="url(#b)">
				<path
					stroke="#3CF686"
					strokeLinecap="round"
					strokeWidth="2"
					d="M25.726 17.56L24 24l-1.725 6.44"
				></path>
			</g>
			<g filter="url(#c)">
				<path
					stroke="#3CF686"
					strokeLinecap="round"
					strokeWidth="2"
					d="M19.333 20l-.228.229c-1.778 1.777-2.667 2.666-2.667 3.771s.889 1.994 2.667 3.771l.228.229"
				></path>
			</g>
			<path
				fill="#090909"
				stroke="#fff"
				strokeWidth="2"
				d="M36.876 13.657a2.667 2.667 0 11-3.771-3.771 2.667 2.667 0 013.77 3.77zm.781 24a2.667 2.667 0 11-3.772-3.771 2.667 2.667 0 013.772 3.77zm-23.447-24a2.667 2.667 0 11-3.772-3.771 2.667 2.667 0 013.771 3.77zm0 24a2.667 2.667 0 11-3.772-3.771 2.667 2.667 0 013.771 3.77z"
			></path>
			<defs>
				<filter
					id="a"
					width="32.895"
					height="38"
					x="13.666"
					y="5"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						result="effect1_foregroundBlur_245_3493"
						stdDeviation="7"
					></feGaussianBlur>
				</filter>
				<filter
					id="b"
					width="33.452"
					height="42.88"
					x="7.274"
					y="2.56"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						result="effect1_foregroundBlur_245_3493"
						stdDeviation="7"
					></feGaussianBlur>
				</filter>
				<filter
					id="c"
					width="32.895"
					height="38"
					x="1.438"
					y="5"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						result="effect1_foregroundBlur_245_3493"
						stdDeviation="7"
					></feGaussianBlur>
				</filter>
			</defs>
		</g>
	),
	Js: () => (
		<g>
			<g
				stroke="#FFD467"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity="0.6"
				strokeWidth="2"
				filter="url(#a)"
			>
				<path d="M23 10.166V15.5a2.667 2.667 0 11-5.334 0m9.334 2a4.2 4.2 0 002.5.833c1.5 0 2.833-.5 2.833-2.166 0-2.667-5.333-1.5-5.333-4C27 10.833 28 10 29.5 10a4.2 4.2 0 012.5.833"></path>
			</g>
			<path
				stroke="#fff"
				strokeLinecap="round"
				strokeWidth="2"
				d="M34.647 18.47l2.23 1.045c1.941.91 1.941 4.06 0 4.97l-8.92 4.182a6.893 6.893 0 01-5.913 0l-8.922-4.183c-1.94-.91-1.94-4.059 0-4.969l2.23-1.045"
			></path>
			<path
				stroke="#fff"
				strokeLinecap="round"
				strokeWidth="2"
				d="M11.666 22v7.333M34.333 26v6.834c0 1.344-.671 2.602-1.847 3.253-1.958 1.085-5.091 2.58-7.486 2.58-2.395 0-5.529-1.495-7.486-2.58-1.176-.65-1.848-1.91-1.848-3.253V26"
				opacity="0.5"
			></path>
			<path
				stroke="#FFD467"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M23 9.166V14.5a2.667 2.667 0 11-5.334 0m9.334 2a4.2 4.2 0 002.5.833c1.5 0 2.833-.5 2.833-2.166 0-2.667-5.333-1.5-5.333-4C27 9.833 28 9 29.5 9a4.2 4.2 0 012.5.833"
			></path>
			<defs>
				<filter
					id="a"
					width="34.667"
					height="28.334"
					x="7.667"
					y="0"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						result="effect1_foregroundBlur_245_3496"
						stdDeviation="4.5"
					></feGaussianBlur>
				</filter>
			</defs>
		</g>
	),
	Rocket: () => (
		<g>
			<path
				fill="#fff"
				fillOpacity="0.5"
				d="M15.43 23.375l.708-.707-.001-.001-.706.708zm5.796-5.479a1 1 0 001.082-1.682l-1.082 1.682zm-.298-1.38l.541-.842-.54.841zm-3.426-1.759l.146-.99-.146.99zm-6.535 3.94l.706.709-.706-.708zm4.152-3.635l.383.923-.383-.923zm-3.302 5.506l-.368.93.368-.93zm.165.066l.38-.925-.38.925zm2.168 1.464l.706-.708-.706.708zm-.126-.124l-.696.717.696-.717zm-2.711-1.606l.368-.93-.368.93zm13.353 12.299l-.707.707.048.045.66-.752zm7.099-7.024a1 1 0 10-1.679 1.087l1.679-1.087zm-.298 1.38l-.84.543.84-.543zm1.764 3.415l.989-.147-.99.147zm-3.953 6.516l.706.708-.706-.708zm3.647-4.14l.923.385-.923-.385zm-5.26 3.952l.93-.37-.93.37zm-.632-1.456l.877-.48-.877.48zm-1.67-2.032l.707-.708-.023-.023-.024-.02-.66.751zm1.091 1.155l.787-.617-.787.617zm2.712 2.633l-.706-.708.706.708zm-6.858-20.852l-.839-.54-1.082 1.682.839.54 1.082-1.682zm-.839-.54c-.828-.533-1.497-.964-2.073-1.274-.588-.317-1.139-.542-1.748-.632l-.292 1.978c.292.044.613.156 1.092.414.491.265 1.085.646 1.939 1.196l1.082-1.682zm-9.796 3.732a73.408 73.408 0 012.28-2.211c.36-.33.69-.613.973-.831.297-.23.486-.341.576-.379l-.766-1.847c-.343.142-.703.389-1.031.642-.344.265-.719.589-1.1.937-.763.696-1.601 1.532-2.344 2.272l1.412 1.417zm5.975-5.638a5.506 5.506 0 00-2.912.37l.766 1.847a3.514 3.514 0 011.854-.239l.292-1.978zm-6.704 7.53l.505.2.737-1.86-.505-.2-.737 1.86zm2.5 1.508l1.28 1.277 1.413-1.416-1.281-1.277-1.412 1.416zm-1.995-1.308l.152.06.762-1.849-.177-.07-.737 1.859zm3.407-.108a7.69 7.69 0 00-.135-.134l-1.393 1.435.116.115 1.412-1.416zm-3.255.168a5.48 5.48 0 011.727 1.133l1.393-1.435a7.477 7.477 0 00-2.358-1.547l-.762 1.85zm-1.34-3.569a2.02 2.02 0 00.683 3.309l.737-1.86a.036.036 0 01-.009-.004c-.001-.002-.004-.005-.005-.01v-.011s.001-.003.006-.007L10.26 17.99zm19.825 8.74l.542.837 1.679-1.087-.542-.836-1.679 1.087zm-1.514 9.517l-.112.112 1.412 1.416.112-.112-1.412-1.416zm2.056-8.68c.551.852.933 1.443 1.199 1.933.259.477.371.796.414 1.086l1.979-.294c-.09-.608-.317-1.159-.635-1.745-.311-.574-.744-1.241-1.278-2.067l-1.68 1.087zm-.644 10.096a76.987 76.987 0 002.28-2.337c.348-.38.674-.754.94-1.097.253-.327.5-.686.644-1.029l-1.846-.77c-.037.089-.149.277-.379.574a16 16 0 01-.833.97c-.662.722-1.467 1.525-2.218 2.273l1.412 1.416zm2.257-7.077c.09.608.01 1.246-.239 1.844l1.846.77c.386-.923.517-1.93.372-2.908l-1.979.294zm-6.218 1.941l-.697-.611-1.319 1.504.697.61 1.319-1.503zm2.571 3.87c-.286-.718-.458-1.154-.684-1.566l-1.754.961c.154.28.277.584.58 1.346l1.858-.741zm-3.936-2.41c.58.58.812.812 1.01 1.064l1.573-1.234c-.29-.37-.623-.7-1.171-1.246l-1.412 1.416zm3.252.844a7.451 7.451 0 00-.669-1.014l-1.574 1.234c.183.234.347.482.49.741l1.753-.961zm.55 1.528a.092.092 0 01.038-.022.063.063 0 01.03-.002.075.075 0 01.032.016c.015.013.028.03.034.046l-1.858.74c.512 1.285 2.176 1.595 3.136.638l-1.412-1.416zm-3.086-4.398l-.375-.375-1.415 1.414.375.375 1.415-1.414zm-10.65-7.878l.235.235 1.414-1.414-.235-.235-1.414 1.414z"
			></path>
			<g filter="url(#a)">
				<path
					stroke="#F948A1"
					strokeWidth="2"
					d="M19.022 28.923l2.747-2.738m9.155-5.477a2.595 2.595 0 01-3.662 0 2.576 2.576 0 010-3.651 2.595 2.595 0 013.662 0 2.576 2.576 0 010 3.65z"
				></path>
			</g>
			<path
				stroke="#F948A1"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M19.022 28.923l2.747-2.738m9.155-5.477a2.595 2.595 0 01-3.662 0 2.576 2.576 0 010-3.651 2.595 2.595 0 013.662 0 2.576 2.576 0 010 3.65z"
			></path>
			<path
				fill="#fff"
				d="M18.106 28.01l.706-.708-.706.708zm0-7.303L17.4 20l.706.709zm9.156 9.129l-.706-.708.706.708zm-7.325 0l-.706.708.706-.708zm3.663 2.582v1-1zm11.458-10.355l.706.709-.706-.709zm-9.156-9.128l.706.708-.706-.708zm-1.61 19.357l.345.938-.346-.938zm-8.626-8.682l.928.373-.928-.373zm18.686-2.255l-7.796 7.773 1.412 1.416 7.796-7.773-1.412-1.416zm-13.709 7.773l-1.83-1.826-1.413 1.416 1.831 1.826 1.412-1.416zm-1.83-7.712l7.795-7.773-1.412-1.416-7.796 7.772 1.412 1.417zm12.582-9.75h.759v-2h-.759v2zm4.938 4.164v.756h2v-.756h-2zm-4.18-4.164c1.25 0 2.086.003 2.71.086.594.08.843.217 1.006.379l1.412-1.417c-.596-.594-1.337-.835-2.153-.944-.787-.106-1.782-.104-2.974-.104v2zm6.18 4.164c0-1.188.002-2.181-.104-2.966-.11-.815-.352-1.555-.948-2.15l-1.412 1.417c.162.161.298.408.378 1 .084.62.086 1.454.086 2.7h2zm-19.52 11.472c-.884-.88-1.474-1.471-1.855-1.97-.363-.475-.441-.746-.441-.973h-2c0 .842.353 1.536.853 2.189.482.63 1.187 1.33 2.03 2.17l1.412-1.416zm.418 3.242c.843.84 1.546 1.544 2.177 2.024.655.498 1.35.85 2.192.85v-2c-.231 0-.504-.08-.98-.442-.5-.38-1.093-.968-1.977-1.848l-1.412 1.416zm16.533-7.773c1.064-1.061 1.807-1.776 2.197-2.715l-1.847-.767c-.201.485-.582.889-1.762 2.066l1.412 1.416zm.57-6.185c0 1.665-.019 2.218-.22 2.703l1.847.767c.39-.939.372-1.968.372-3.47h-2zm-9.726-2.943c1.18-1.177 1.586-1.556 2.074-1.757l-.764-1.849c-.94.388-1.657 1.128-2.722 2.19l1.412 1.416zm4.787-3.977c-1.506 0-2.537-.017-3.477.371l.764 1.849c.488-.202 1.044-.22 2.713-.22v-2zm-4.84 19.462c-.68.68-1.194 1.19-1.635 1.57-.442.383-.74.57-.974.655l.691 1.877c.57-.21 1.085-.581 1.59-1.018.508-.438 1.078-1.007 1.74-1.668l-1.411-1.416zm-2.61 2.225a.973.973 0 01-.345.065v2c.36 0 .704-.065 1.037-.188l-.691-1.877zM17.4 20c-.647.646-1.206 1.202-1.64 1.697-.432.493-.802.993-1.022 1.54l1.856.747c.094-.235.289-.533.67-.968.38-.434.884-.937 1.548-1.6L17.4 20zm-2.662 3.238a2.973 2.973 0 00-.221 1.122h2c0-.12.021-.239.077-.376l-1.856-.746z"
			></path>
			<defs>
				<filter
					id="a"
					width="28.367"
					height="28.331"
					x="11.316"
					y="8.3"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						result="effect1_foregroundBlur_245_3495"
						stdDeviation="3.5"
					></feGaussianBlur>
				</filter>
			</defs>
		</g>
	),
	Puzzle: () => (
		<g>
			<path
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity="0.5"
				strokeWidth="2"
				d="M34.445 15.222h-3.347c-.774 0-1.32-.781-1.32-1.555a4.667 4.667 0 00-9.333 0c0 .774-.547 1.555-1.32 1.555h-3.347c-.86 0-1.556.697-1.556 1.556v3.346c0 .774-.781 1.32-1.555 1.32a4.667 4.667 0 100 9.334c.774 0 1.555.546 1.555 1.32v3.347c0 .859.697 1.555 1.556 1.555h18.667c.859 0 1.555-.696 1.555-1.555V16.778c0-.86-.696-1.556-1.555-1.556z"
			></path>
			<g filter="url(#a)">
				<path
					stroke="#4EDDF5"
					strokeLinecap="round"
					strokeWidth="2"
					d="M20 29c1.134.63 2.513 1 4 1s2.866-.37 4-1"
				></path>
			</g>
			<path
				stroke="#4EDDF5"
				strokeLinecap="round"
				strokeWidth="2"
				d="M20.334 28.666a6.688 6.688 0 004 1.334 6.688 6.688 0 004-1.334"
			></path>
			<ellipse cx="28.333" cy="22.666" fill="#fff" rx="1.333" ry="2"></ellipse>
			<ellipse cx="20.333" cy="22.666" fill="#fff" rx="1.333" ry="2"></ellipse>
			<defs>
				<filter
					id="a"
					width="24"
					height="17"
					x="12"
					y="21"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						result="effect1_foregroundBlur_245_3494"
						stdDeviation="3.5"
					></feGaussianBlur>
				</filter>
			</defs>
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
