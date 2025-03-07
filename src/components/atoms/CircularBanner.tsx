import React from 'react';

const CircularBanner = () => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-background absolute block -top-20 translate-y-ful rounded-full border-border border md:-right-20 md:top-16"
        >
            {/* <!-- Background circle --> */}
            <circle cx="100" cy="100" r="100" fill="var(--background)" />

            {/* <!-- Define a circle path --> */}
            <defs>
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>

            {/* <!-- Attach text to the path --> */}
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="-360 100 100"
                    dur="20s"
                    repeatCount="indefinite" />
                <text fill="white" fontSize="14" fontFamily="sans-serif" letterSpacing="2">
                    <textPath
                        href="#circlePath"
                        textAnchor="middle"
                        startOffset="50%">
                        Let&apos;s Discover Your Dream Property With Estatein ✨
                    </textPath>
                </text>
            </g>

            {/* <!-- Center circle --> */}
            <circle cx="100" cy="100" r="40" fill="#222" />

            {/* <!-- Center arrow icon --> */}
            <g>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="15s"
                    repeatCount="indefinite" />
                <g transform="translate(88, 88) scale(1)">
                    <path d="M6 8L2 12L6 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
        </svg>
    );
};

// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>

// Add these CSS keyframes to your global CSS or style tag
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }

// @keyframes spin-reverse {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(-360deg); }
// }

export default CircularBanner;