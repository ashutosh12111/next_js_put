import React from 'react'

const Loading = () => {


  return (
    
	<div className="flex items-center justify-center w-screen h-screen">
		<div className="flex flex-col items-center justify-center ">
			<div className="flex gap-3 items-center">
				<svg className="animate-spin" width="60" height="60" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M0 15.0292C0 6.7508 6.66427 0.0231192 14.9427 5.94583e-05C23.2212 -0.0230003 29.9488 6.66432 29.9719 14.9428C29.995 23.2212 23.3076 29.9489 15.0292 29.972C14.8966 29.972 14.764 29.972 14.6314 29.972L14.6199 26.317C18.6726 26.4496 22.6562 24.3915 24.8123 20.6328C27.9253 15.208 26.046 8.29004 20.6269 5.18274C15.2021 2.06967 8.28421 3.94904 5.17691 9.36808C2.49622 14.0377 3.51661 19.8199 7.32147 23.325L7.29841 15.0177C7.28688 10.769 10.717 7.31576 14.9658 7.30423C19.2145 7.2927 22.6677 10.7228 22.6793 14.9716C22.6908 19.2204 19.2606 22.6735 15.0119 22.6851C14.8793 22.6851 14.7467 22.6851 14.6141 22.6735L14.6026 19.0301C14.7352 19.0416 14.862 19.0474 15.0004 19.0474C17.2429 19.0416 19.0531 17.2199 19.0473 14.9774C19.0416 12.7348 17.2199 10.9246 14.9773 10.9304C12.8155 10.9361 11.0571 12.631 10.9418 14.7583C10.9418 14.839 10.9361 14.9197 10.9361 15.0004H10.9418L10.9822 29.4301C5.11926 27.8101 0 22.8465 0 15.0292Z" fill="url(#paint0_linear_1_3)"/>
				<defs>
				<linearGradient id="paint0_linear_1_3" x1="14.986" y1="0" x2="14.986" y2="29.972" gradientUnits="userSpaceOnUse">
				<stop stopColor="#D06705"/>
				<stop offset="0.489583" stopColor="#EF9C20"/>
				<stop offset="0.979167" stopColor="#ECDA36"/>
				</linearGradient>
				</defs>
				</svg>
			</div>
		</div>
    </div>	
  )
}

export default Loading