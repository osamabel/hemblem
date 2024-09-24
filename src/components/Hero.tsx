import React from 'react'

function Hero() {
  return (
    <div className='pt-[250px] pb-[80px] h-screen'>
        <p>
        hello
        </p>


        
        <div className="background-gradient-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="2040" height="450" viewBox="0 0 2040 450" fill="none" data-arp-injected="true">
                <mask id="mask0_153:3695" maskUnits="userSpaceOnUse" x="0" y="0" width="2040" height="450">
                    <rect width="2040" height="450" fill="#C4C4C4"></rect>
                </mask>
                <g mask="url(#mask0_153:3695)">
                    <rect opacity="0.2" width="900" height="450" fill="url(#paint0_linear_153:3695)"></rect>
                    <rect opacity="0.2" x="380" width="900" height="450" fill="url(#paint1_linear_153:3695)"></rect>
                    <rect opacity="0.2" x="760" width="900" height="450" fill="url(#paint2_linear_153:3695)"></rect>
                    <rect opacity="0.2" x="1140" width="900" height="450" fill="url(#paint3_linear_153:3695)"></rect>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_153:3695" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF9F0F" stop-opacity="0"></stop>
                        <stop offset="0.5" stop-color="#FF9F0F"></stop>
                        <stop offset="1" stop-color="#FF9F0F" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_153:3695" x1="380" y1="0" x2="1280" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF5BC7" stop-opacity="0"></stop>
                        <stop offset="0.5" stop-color="#FF5BC7"></stop>
                        <stop offset="1" stop-color="#FF5BC7" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_153:3695" x1="760" y1="0" x2="1660" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#725BFF" stop-opacity="0"></stop>
                        <stop offset="0.5" stop-color="#725BFF"></stop>
                        <stop offset="1" stop-color="#725BFF" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint3_linear_153:3695" x1="1140" y1="0" x2="2040" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3CE9DE" stop-opacity="0"></stop>
                        <stop offset="0.5" stop-color="#3CE9DE"></stop>
                        <stop offset="1" stop-color="#3CE9DE" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="background-gradient-bottom">
            <svg width="2040" height="450" viewBox="0 0 2040 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_153:3694"  maskUnits="userSpaceOnUse" x="0" y="0" width="2040" height="450">
                    <rect width="2040" height="450" fill="#C4C4C4"></rect>
                </mask>
                <g mask="url(#mask0_153:3694)">
                    <circle opacity="0.2" cx="1590" r="450" fill="url(#paint0_radial_153:3694)"></circle>
                    <circle opacity="0.2" cx="450" r="450" fill="url(#paint1_radial_153:3694)"></circle>
                    <circle opacity="0.2" cx="1210" r="450" fill="url(#paint2_radial_153:3694)"></circle>
                    <circle opacity="0.2" cx="830" r="450" fill="url(#paint3_radial_153:3694)"></circle>
                </g>
                <defs>
                    <radialGradient id="paint0_radial_153:3694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1590) rotate(90) scale(450)">
                        <stop stop-color="#3CE9DE"></stop>
                        <stop offset="1" stop-color="#3CE9DE" stop-opacity="0"></stop>
                    </radialGradient>
                    <radialGradient id="paint1_radial_153:3694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(450) rotate(90) scale(450)">
                        <stop stop-color="#FF9F0F"></stop>
                        <stop offset="1" stop-color="#FF9F0F" stop-opacity="0"></stop>
                    </radialGradient>
                    <radialGradient id="paint2_radial_153:3694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1210) rotate(90) scale(450)">
                        <stop stop-color="#725BFF"></stop>
                        <stop offset="1" stop-color="#725BFF" stop-opacity="0"></stop>
                    </radialGradient>
                    <radialGradient id="paint3_radial_153:3694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(830) rotate(90) scale(450)">
                        <stop stop-color="#FF5BC7"></stop>
                        <stop offset="1" stop-color="#FF5BC7" stop-opacity="0"></stop>
                    </radialGradient>
                </defs>
            </svg>

        </div>
    </div>
  )
}

export default Hero