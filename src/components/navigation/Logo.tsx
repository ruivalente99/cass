export const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg width="35" height="35" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M71.6147 0.478027C58.995 2.16318 48.4357 7.05017 39.5075 15.3075C15.1267 37.8888 12.2079 70.1598 32.2104 96.1957C36.8462 102.262 43.9716 108.75 50.0668 112.458C51.7838 113.469 53.2432 114.648 53.2432 114.985C53.2432 115.322 50.3244 119.535 46.7188 124.338C27.5747 150.374 14.4399 178.348 6.11267 210.787C-1.35611 240.193 -2.04289 277.099 4.39571 308.022C6.62775 318.722 13.9248 342.989 16.4144 347.876C19.5049 353.942 24.1407 357.734 28.3473 357.734C30.4935 357.734 34.9576 355.628 37.3613 353.437C38.9924 352.004 41.3962 351.92 70.1553 351.667L101.232 351.415L103.808 348.971C108.615 344.421 109.302 338.355 105.525 333.215C102.262 328.665 102.348 328.665 67.9232 328.244L35.7302 327.822L33.4123 320.239C32.1246 316.026 31.0086 311.645 31.0086 310.297L30.9227 308.022H64.8327C102.348 308.022 102.348 308.022 105.61 302.713C107.843 299.174 107.843 293.276 105.61 289.737C104.752 288.221 102.434 286.283 100.545 285.272C97.1974 283.671 95.6521 283.587 61.4846 283.587H25.9435L25.3426 273.644C23.1106 239.519 30.8369 203.962 47.6631 171.27C68.0091 131.584 94.7936 102.599 135.228 76.3107C145.787 69.4857 168.279 58.4479 179.526 54.572C198.67 47.9998 222.793 43.5341 243.396 42.86C278.852 41.6804 312.418 49.2637 346.414 66.1154C373.885 79.7653 405.735 104.959 424.364 127.708C439.13 145.824 453.381 169.669 461.279 189.638C466.43 202.614 471.58 223.089 473.984 239.772C475.1 247.103 475.358 281.143 474.328 282.744C473.984 283.25 461.794 283.587 438.615 283.587C400.155 283.587 399.811 283.671 395.605 288.474C390.797 294.035 392.085 302.039 398.266 306.084C401.185 308.022 401.271 308.022 435.438 308.022H469.606L469.091 310.297C467.46 317.458 465.914 323.104 464.884 325.463L463.682 328.244H432.691C398.352 328.244 397.236 328.412 394.06 333.468C390.797 338.692 392.171 345.264 397.494 349.645L400.241 351.836H427.54C453.295 351.836 454.926 351.92 454.411 353.268C453.381 356.133 447.2 365.739 440.16 375.597C434.065 384.107 429.343 389.837 412.259 409.216C407.023 415.03 407.023 421.686 412.259 426.573C415.779 429.775 418.011 430.533 422.561 429.775C425.394 429.27 427.455 427.921 433.378 422.276C459.819 397.42 481.11 361.526 491.497 324.368C500.339 292.686 502.486 254.686 496.991 224.606C490.381 187.7 474.757 152.143 452.522 123.243C449.174 118.861 446.427 114.985 446.513 114.564C446.513 114.143 449.26 112.121 452.608 110.014C460.077 105.296 469.348 95.8586 473.297 88.8652C475.014 85.9161 477.418 80.4393 478.706 76.732C480.766 70.9181 481.024 68.6431 481.024 59.8802C481.11 47.9156 479.65 41.8489 474.585 32.3277C468.747 21.2056 458.446 11.6844 445.74 5.53354C431.232 -1.37567 412.431 -1.62845 397.064 5.11224C383.844 10.8418 370.022 25.9241 365.215 39.8267C364.185 42.7758 363.154 45.3878 362.897 45.6406C362.725 45.8933 357.746 43.7869 351.908 41.0063C318.428 25.1657 280.311 17.2455 243.225 18.4251C209.916 19.6047 177.98 27.0194 150.509 40.0795C143.641 43.2813 137.889 45.8933 137.803 45.8091C137.803 45.6406 136.602 42.7758 135.314 39.4054C125.098 13.3696 98.3134 -3.06085 71.6147 0.478027ZM93.0767 27.9463C103.121 32.6648 110.847 42.523 112.135 52.4655C113.165 60.8914 112.65 61.7339 102.262 69.4015C97.1115 73.1931 88.6126 80.2708 83.3758 85.2421L73.7609 94.2577L70.1553 93.1624C63.7167 91.3087 58.9092 88.3596 54.2734 83.5569C42.6839 71.5079 40.8811 54.572 49.7234 41.1749C57.1064 29.9685 67.494 24.6602 80.7146 25.25C86.4664 25.5028 89.0418 26.0083 93.0767 27.9463ZM435.353 28.0305C442.564 31.3166 448.917 37.5518 452.608 44.8822C455.269 50.2748 455.441 51.2016 455.441 59.459C455.441 67.8006 455.269 68.7274 452.694 73.8672C448.144 82.7986 438.615 90.6346 428.571 93.5836C426.939 94.0049 425.48 93.0781 419.986 87.8541C412.259 80.6078 403.76 73.5301 395.09 67.0422C391.57 64.4302 388.651 61.6497 388.308 60.4701C386.591 53.5609 390.368 42.186 396.721 35.4453C403.846 27.862 411.487 24.8287 422.389 25.1657C428.485 25.3343 430.717 25.8398 435.353 28.0305Z" fill="black"/>
    <path d="M123.896 181.634C116.685 183.993 109.388 190.481 105.954 197.812C103.808 202.446 103.464 204.131 103.464 210.703C103.464 217.612 103.722 218.876 106.297 223.932C113.68 238.761 133.168 245.333 147.676 238.087C153.17 235.307 159.351 229.156 162.013 223.847C164.159 219.635 164.416 218.202 164.416 210.703C164.416 203.204 164.159 201.772 162.013 197.559C155.231 183.909 138.49 177 123.896 181.634ZM132.138 193.936C134.541 196.969 134.37 199.16 131.451 203.625C126.987 210.619 119.604 212.136 116.942 206.659C115.226 203.204 116.342 200.339 120.977 195.789C125.957 190.902 129.305 190.397 132.138 193.936Z" fill="black"/>
    <path d="M357.403 181.128C349.419 183.656 342.293 190.228 338.43 198.317C336.542 202.445 336.198 204.299 336.198 211.124C336.198 220.982 338.001 225.279 345.212 232.273C351.307 238.171 357.574 240.867 365.73 240.867C379.809 240.951 390.883 233.452 395.862 220.477C401.013 206.995 393.802 189.975 379.895 183.234C373.456 180.117 363.412 179.19 357.403 181.128ZM364.871 193.598C368.649 197.474 364.7 206.49 358.089 209.186C355.428 210.281 354.741 210.281 352.853 209.27C350.277 207.922 348.989 204.552 349.762 201.518C350.02 200.339 351.994 197.643 353.969 195.536C358.347 191.07 361.867 190.481 364.871 193.598Z" fill="black"/>
    <path d="M227.085 205.479C211.633 211.124 201.932 223.931 200.387 240.53C198.498 260.415 212.405 279.289 233.696 285.777C239.362 287.462 239.276 286.872 235.155 297.742C231.12 308.358 224.853 315.857 216.354 320.323C214.037 321.587 211.547 321.924 205.623 321.924C198.927 321.924 197.296 321.587 193.519 319.649C188.969 317.29 183.99 312.487 181.414 307.853C180.298 305.746 179.869 303.219 179.869 297.91C179.955 291.928 180.298 289.822 182.359 285.272C186.479 275.919 185.449 270.695 178.581 266.061C173.602 262.775 168.365 263.954 163.215 269.684C151.625 282.66 150.595 305.494 160.725 322.177C166.906 332.204 178.581 341.64 188.711 344.59L194.034 346.19V369.614C194.034 390.595 194.206 393.459 195.751 398.431C200.558 413.597 214.38 424.551 230.176 425.73C236.014 426.236 243.997 424.551 247.861 422.107C249.578 421.012 250.179 421.096 253.012 422.444C264.944 428.342 280.225 426.236 291.987 417.22C297.309 413.092 301.258 407.783 304.091 400.79C305.894 396.409 306.066 394.471 306.495 371.299L306.924 346.527L311.388 345.011C323.235 341.051 332.249 334.31 339.031 324.368C344.096 316.953 346.758 309.285 347.444 300.438C348.474 286.451 342.723 271.874 333.966 266.061C328.129 262.1 320.059 264.797 317.14 271.537C315.423 275.498 315.595 277.351 318.685 284.85C322.548 294.456 322.548 301.365 318.599 308.611C315.509 314.256 311.216 318.132 305.035 320.829C299.713 323.104 289.84 322.682 284.26 319.902C276.362 315.857 268.808 305.662 264.343 293.108C262.111 286.704 262.197 286.367 266.06 285.693C270.095 285.019 278.508 281.227 283.745 277.688C291.128 272.717 297.91 261.763 300.142 251.315C304.263 232.189 291.386 211.04 272.07 205.142C267.692 203.794 264.172 203.541 249.578 203.625C233.782 203.625 231.807 203.794 227.085 205.479ZM268.893 228.65C272.07 231.515 272.499 235.391 270.009 238.087C268.55 239.688 267.434 239.772 250.522 239.772C233.782 239.772 232.58 239.688 230.949 238.087C228.373 235.559 228.631 230.925 231.464 228.397C233.782 226.291 233.953 226.291 249.921 226.291H266.146L268.893 228.65ZM270.782 341.303C272.156 342.146 275.246 343.494 277.65 344.337L282.028 345.769L282.286 368.013C282.457 389.584 282.457 390.258 280.569 393.881C277.736 399.189 274.817 401.127 269.151 401.127C265.202 401.127 264.172 400.79 261.94 398.684C260.48 397.251 258.935 394.976 258.506 393.459C258.077 392.027 257.991 377.535 258.248 361.273L258.677 331.698L263.485 335.742C266.146 337.933 269.408 340.461 270.782 341.303ZM242.796 363.463C242.538 390.595 242.366 393.881 240.993 395.903C236.014 403.318 225.969 403.065 220.819 395.397L218.501 392.027L218.243 369.362C217.986 348.213 218.071 346.696 219.531 346.275C223.823 344.927 233.61 339.703 237.387 336.754C239.791 334.9 242.023 333.383 242.366 333.383C242.71 333.299 242.967 346.865 242.796 363.463Z" fill="black"/>
    <path d="M55.3893 385.034C51.6979 386.635 49.2941 389.584 48.0923 393.796C46.7187 399.105 48.779 402.728 59.7676 414.356C83.2899 439.296 108.272 458.17 136.43 472.241C164.416 486.228 186.651 493.39 216.784 498.109C228.373 499.878 259.879 500.636 272.327 499.372C307.697 495.749 347.616 482.942 377.749 465.332C386.076 460.529 388.565 458.507 390.282 455.305C392.858 450.418 390.797 443.088 385.99 440.223C381.526 437.527 377.062 438.116 368.992 442.498C338.774 458.676 317.14 466.68 288.896 472.325C258.42 478.392 233.266 477.718 200.472 470.05C170.082 462.973 139.263 448.396 111.191 427.753C106.469 424.214 94.2785 413.344 84.1484 403.486C73.9325 393.712 64.5751 385.202 63.2873 384.781C60.1968 383.601 58.5657 383.685 55.3893 385.034Z" fill="black"/>
    </svg>  
  );
};

export const LogoSmall = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg width="25" height="25" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M71.6147 0.478027C58.995 2.16318 48.4357 7.05017 39.5075 15.3075C15.1267 37.8888 12.2079 70.1598 32.2104 96.1957C36.8462 102.262 43.9716 108.75 50.0668 112.458C51.7838 113.469 53.2432 114.648 53.2432 114.985C53.2432 115.322 50.3244 119.535 46.7188 124.338C27.5747 150.374 14.4399 178.348 6.11267 210.787C-1.35611 240.193 -2.04289 277.099 4.39571 308.022C6.62775 318.722 13.9248 342.989 16.4144 347.876C19.5049 353.942 24.1407 357.734 28.3473 357.734C30.4935 357.734 34.9576 355.628 37.3613 353.437C38.9924 352.004 41.3962 351.92 70.1553 351.667L101.232 351.415L103.808 348.971C108.615 344.421 109.302 338.355 105.525 333.215C102.262 328.665 102.348 328.665 67.9232 328.244L35.7302 327.822L33.4123 320.239C32.1246 316.026 31.0086 311.645 31.0086 310.297L30.9227 308.022H64.8327C102.348 308.022 102.348 308.022 105.61 302.713C107.843 299.174 107.843 293.276 105.61 289.737C104.752 288.221 102.434 286.283 100.545 285.272C97.1974 283.671 95.6521 283.587 61.4846 283.587H25.9435L25.3426 273.644C23.1106 239.519 30.8369 203.962 47.6631 171.27C68.0091 131.584 94.7936 102.599 135.228 76.3107C145.787 69.4857 168.279 58.4479 179.526 54.572C198.67 47.9998 222.793 43.5341 243.396 42.86C278.852 41.6804 312.418 49.2637 346.414 66.1154C373.885 79.7653 405.735 104.959 424.364 127.708C439.13 145.824 453.381 169.669 461.279 189.638C466.43 202.614 471.58 223.089 473.984 239.772C475.1 247.103 475.358 281.143 474.328 282.744C473.984 283.25 461.794 283.587 438.615 283.587C400.155 283.587 399.811 283.671 395.605 288.474C390.797 294.035 392.085 302.039 398.266 306.084C401.185 308.022 401.271 308.022 435.438 308.022H469.606L469.091 310.297C467.46 317.458 465.914 323.104 464.884 325.463L463.682 328.244H432.691C398.352 328.244 397.236 328.412 394.06 333.468C390.797 338.692 392.171 345.264 397.494 349.645L400.241 351.836H427.54C453.295 351.836 454.926 351.92 454.411 353.268C453.381 356.133 447.2 365.739 440.16 375.597C434.065 384.107 429.343 389.837 412.259 409.216C407.023 415.03 407.023 421.686 412.259 426.573C415.779 429.775 418.011 430.533 422.561 429.775C425.394 429.27 427.455 427.921 433.378 422.276C459.819 397.42 481.11 361.526 491.497 324.368C500.339 292.686 502.486 254.686 496.991 224.606C490.381 187.7 474.757 152.143 452.522 123.243C449.174 118.861 446.427 114.985 446.513 114.564C446.513 114.143 449.26 112.121 452.608 110.014C460.077 105.296 469.348 95.8586 473.297 88.8652C475.014 85.9161 477.418 80.4393 478.706 76.732C480.766 70.9181 481.024 68.6431 481.024 59.8802C481.11 47.9156 479.65 41.8489 474.585 32.3277C468.747 21.2056 458.446 11.6844 445.74 5.53354C431.232 -1.37567 412.431 -1.62845 397.064 5.11224C383.844 10.8418 370.022 25.9241 365.215 39.8267C364.185 42.7758 363.154 45.3878 362.897 45.6406C362.725 45.8933 357.746 43.7869 351.908 41.0063C318.428 25.1657 280.311 17.2455 243.225 18.4251C209.916 19.6047 177.98 27.0194 150.509 40.0795C143.641 43.2813 137.889 45.8933 137.803 45.8091C137.803 45.6406 136.602 42.7758 135.314 39.4054C125.098 13.3696 98.3134 -3.06085 71.6147 0.478027ZM93.0767 27.9463C103.121 32.6648 110.847 42.523 112.135 52.4655C113.165 60.8914 112.65 61.7339 102.262 69.4015C97.1115 73.1931 88.6126 80.2708 83.3758 85.2421L73.7609 94.2577L70.1553 93.1624C63.7167 91.3087 58.9092 88.3596 54.2734 83.5569C42.6839 71.5079 40.8811 54.572 49.7234 41.1749C57.1064 29.9685 67.494 24.6602 80.7146 25.25C86.4664 25.5028 89.0418 26.0083 93.0767 27.9463ZM435.353 28.0305C442.564 31.3166 448.917 37.5518 452.608 44.8822C455.269 50.2748 455.441 51.2016 455.441 59.459C455.441 67.8006 455.269 68.7274 452.694 73.8672C448.144 82.7986 438.615 90.6346 428.571 93.5836C426.939 94.0049 425.48 93.0781 419.986 87.8541C412.259 80.6078 403.76 73.5301 395.09 67.0422C391.57 64.4302 388.651 61.6497 388.308 60.4701C386.591 53.5609 390.368 42.186 396.721 35.4453C403.846 27.862 411.487 24.8287 422.389 25.1657C428.485 25.3343 430.717 25.8398 435.353 28.0305Z" fill="black"/>
    <path d="M123.896 181.634C116.685 183.993 109.388 190.481 105.954 197.812C103.808 202.446 103.464 204.131 103.464 210.703C103.464 217.612 103.722 218.876 106.297 223.932C113.68 238.761 133.168 245.333 147.676 238.087C153.17 235.307 159.351 229.156 162.013 223.847C164.159 219.635 164.416 218.202 164.416 210.703C164.416 203.204 164.159 201.772 162.013 197.559C155.231 183.909 138.49 177 123.896 181.634ZM132.138 193.936C134.541 196.969 134.37 199.16 131.451 203.625C126.987 210.619 119.604 212.136 116.942 206.659C115.226 203.204 116.342 200.339 120.977 195.789C125.957 190.902 129.305 190.397 132.138 193.936Z" fill="black"/>
    <path d="M357.403 181.128C349.419 183.656 342.293 190.228 338.43 198.317C336.542 202.445 336.198 204.299 336.198 211.124C336.198 220.982 338.001 225.279 345.212 232.273C351.307 238.171 357.574 240.867 365.73 240.867C379.809 240.951 390.883 233.452 395.862 220.477C401.013 206.995 393.802 189.975 379.895 183.234C373.456 180.117 363.412 179.19 357.403 181.128ZM364.871 193.598C368.649 197.474 364.7 206.49 358.089 209.186C355.428 210.281 354.741 210.281 352.853 209.27C350.277 207.922 348.989 204.552 349.762 201.518C350.02 200.339 351.994 197.643 353.969 195.536C358.347 191.07 361.867 190.481 364.871 193.598Z" fill="black"/>
    <path d="M227.085 205.479C211.633 211.124 201.932 223.931 200.387 240.53C198.498 260.415 212.405 279.289 233.696 285.777C239.362 287.462 239.276 286.872 235.155 297.742C231.12 308.358 224.853 315.857 216.354 320.323C214.037 321.587 211.547 321.924 205.623 321.924C198.927 321.924 197.296 321.587 193.519 319.649C188.969 317.29 183.99 312.487 181.414 307.853C180.298 305.746 179.869 303.219 179.869 297.91C179.955 291.928 180.298 289.822 182.359 285.272C186.479 275.919 185.449 270.695 178.581 266.061C173.602 262.775 168.365 263.954 163.215 269.684C151.625 282.66 150.595 305.494 160.725 322.177C166.906 332.204 178.581 341.64 188.711 344.59L194.034 346.19V369.614C194.034 390.595 194.206 393.459 195.751 398.431C200.558 413.597 214.38 424.551 230.176 425.73C236.014 426.236 243.997 424.551 247.861 422.107C249.578 421.012 250.179 421.096 253.012 422.444C264.944 428.342 280.225 426.236 291.987 417.22C297.309 413.092 301.258 407.783 304.091 400.79C305.894 396.409 306.066 394.471 306.495 371.299L306.924 346.527L311.388 345.011C323.235 341.051 332.249 334.31 339.031 324.368C344.096 316.953 346.758 309.285 347.444 300.438C348.474 286.451 342.723 271.874 333.966 266.061C328.129 262.1 320.059 264.797 317.14 271.537C315.423 275.498 315.595 277.351 318.685 284.85C322.548 294.456 322.548 301.365 318.599 308.611C315.509 314.256 311.216 318.132 305.035 320.829C299.713 323.104 289.84 322.682 284.26 319.902C276.362 315.857 268.808 305.662 264.343 293.108C262.111 286.704 262.197 286.367 266.06 285.693C270.095 285.019 278.508 281.227 283.745 277.688C291.128 272.717 297.91 261.763 300.142 251.315C304.263 232.189 291.386 211.04 272.07 205.142C267.692 203.794 264.172 203.541 249.578 203.625C233.782 203.625 231.807 203.794 227.085 205.479ZM268.893 228.65C272.07 231.515 272.499 235.391 270.009 238.087C268.55 239.688 267.434 239.772 250.522 239.772C233.782 239.772 232.58 239.688 230.949 238.087C228.373 235.559 228.631 230.925 231.464 228.397C233.782 226.291 233.953 226.291 249.921 226.291H266.146L268.893 228.65ZM270.782 341.303C272.156 342.146 275.246 343.494 277.65 344.337L282.028 345.769L282.286 368.013C282.457 389.584 282.457 390.258 280.569 393.881C277.736 399.189 274.817 401.127 269.151 401.127C265.202 401.127 264.172 400.79 261.94 398.684C260.48 397.251 258.935 394.976 258.506 393.459C258.077 392.027 257.991 377.535 258.248 361.273L258.677 331.698L263.485 335.742C266.146 337.933 269.408 340.461 270.782 341.303ZM242.796 363.463C242.538 390.595 242.366 393.881 240.993 395.903C236.014 403.318 225.969 403.065 220.819 395.397L218.501 392.027L218.243 369.362C217.986 348.213 218.071 346.696 219.531 346.275C223.823 344.927 233.61 339.703 237.387 336.754C239.791 334.9 242.023 333.383 242.366 333.383C242.71 333.299 242.967 346.865 242.796 363.463Z" fill="black"/>
    <path d="M55.3893 385.034C51.6979 386.635 49.2941 389.584 48.0923 393.796C46.7187 399.105 48.779 402.728 59.7676 414.356C83.2899 439.296 108.272 458.17 136.43 472.241C164.416 486.228 186.651 493.39 216.784 498.109C228.373 499.878 259.879 500.636 272.327 499.372C307.697 495.749 347.616 482.942 377.749 465.332C386.076 460.529 388.565 458.507 390.282 455.305C392.858 450.418 390.797 443.088 385.99 440.223C381.526 437.527 377.062 438.116 368.992 442.498C338.774 458.676 317.14 466.68 288.896 472.325C258.42 478.392 233.266 477.718 200.472 470.05C170.082 462.973 139.263 448.396 111.191 427.753C106.469 424.214 94.2785 413.344 84.1484 403.486C73.9325 393.712 64.5751 385.202 63.2873 384.781C60.1968 383.601 58.5657 383.685 55.3893 385.034Z" fill="black"/>
    </svg>    
  );
};

export const LogoLarge = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M71.6147 0.478027C58.995 2.16318 48.4357 7.05017 39.5075 15.3075C15.1267 37.8888 12.2079 70.1598 32.2104 96.1957C36.8462 102.262 43.9716 108.75 50.0668 112.458C51.7838 113.469 53.2432 114.648 53.2432 114.985C53.2432 115.322 50.3244 119.535 46.7188 124.338C27.5747 150.374 14.4399 178.348 6.11267 210.787C-1.35611 240.193 -2.04289 277.099 4.39571 308.022C6.62775 318.722 13.9248 342.989 16.4144 347.876C19.5049 353.942 24.1407 357.734 28.3473 357.734C30.4935 357.734 34.9576 355.628 37.3613 353.437C38.9924 352.004 41.3962 351.92 70.1553 351.667L101.232 351.415L103.808 348.971C108.615 344.421 109.302 338.355 105.525 333.215C102.262 328.665 102.348 328.665 67.9232 328.244L35.7302 327.822L33.4123 320.239C32.1246 316.026 31.0086 311.645 31.0086 310.297L30.9227 308.022H64.8327C102.348 308.022 102.348 308.022 105.61 302.713C107.843 299.174 107.843 293.276 105.61 289.737C104.752 288.221 102.434 286.283 100.545 285.272C97.1974 283.671 95.6521 283.587 61.4846 283.587H25.9435L25.3426 273.644C23.1106 239.519 30.8369 203.962 47.6631 171.27C68.0091 131.584 94.7936 102.599 135.228 76.3107C145.787 69.4857 168.279 58.4479 179.526 54.572C198.67 47.9998 222.793 43.5341 243.396 42.86C278.852 41.6804 312.418 49.2637 346.414 66.1154C373.885 79.7653 405.735 104.959 424.364 127.708C439.13 145.824 453.381 169.669 461.279 189.638C466.43 202.614 471.58 223.089 473.984 239.772C475.1 247.103 475.358 281.143 474.328 282.744C473.984 283.25 461.794 283.587 438.615 283.587C400.155 283.587 399.811 283.671 395.605 288.474C390.797 294.035 392.085 302.039 398.266 306.084C401.185 308.022 401.271 308.022 435.438 308.022H469.606L469.091 310.297C467.46 317.458 465.914 323.104 464.884 325.463L463.682 328.244H432.691C398.352 328.244 397.236 328.412 394.06 333.468C390.797 338.692 392.171 345.264 397.494 349.645L400.241 351.836H427.54C453.295 351.836 454.926 351.92 454.411 353.268C453.381 356.133 447.2 365.739 440.16 375.597C434.065 384.107 429.343 389.837 412.259 409.216C407.023 415.03 407.023 421.686 412.259 426.573C415.779 429.775 418.011 430.533 422.561 429.775C425.394 429.27 427.455 427.921 433.378 422.276C459.819 397.42 481.11 361.526 491.497 324.368C500.339 292.686 502.486 254.686 496.991 224.606C490.381 187.7 474.757 152.143 452.522 123.243C449.174 118.861 446.427 114.985 446.513 114.564C446.513 114.143 449.26 112.121 452.608 110.014C460.077 105.296 469.348 95.8586 473.297 88.8652C475.014 85.9161 477.418 80.4393 478.706 76.732C480.766 70.9181 481.024 68.6431 481.024 59.8802C481.11 47.9156 479.65 41.8489 474.585 32.3277C468.747 21.2056 458.446 11.6844 445.74 5.53354C431.232 -1.37567 412.431 -1.62845 397.064 5.11224C383.844 10.8418 370.022 25.9241 365.215 39.8267C364.185 42.7758 363.154 45.3878 362.897 45.6406C362.725 45.8933 357.746 43.7869 351.908 41.0063C318.428 25.1657 280.311 17.2455 243.225 18.4251C209.916 19.6047 177.98 27.0194 150.509 40.0795C143.641 43.2813 137.889 45.8933 137.803 45.8091C137.803 45.6406 136.602 42.7758 135.314 39.4054C125.098 13.3696 98.3134 -3.06085 71.6147 0.478027ZM93.0767 27.9463C103.121 32.6648 110.847 42.523 112.135 52.4655C113.165 60.8914 112.65 61.7339 102.262 69.4015C97.1115 73.1931 88.6126 80.2708 83.3758 85.2421L73.7609 94.2577L70.1553 93.1624C63.7167 91.3087 58.9092 88.3596 54.2734 83.5569C42.6839 71.5079 40.8811 54.572 49.7234 41.1749C57.1064 29.9685 67.494 24.6602 80.7146 25.25C86.4664 25.5028 89.0418 26.0083 93.0767 27.9463ZM435.353 28.0305C442.564 31.3166 448.917 37.5518 452.608 44.8822C455.269 50.2748 455.441 51.2016 455.441 59.459C455.441 67.8006 455.269 68.7274 452.694 73.8672C448.144 82.7986 438.615 90.6346 428.571 93.5836C426.939 94.0049 425.48 93.0781 419.986 87.8541C412.259 80.6078 403.76 73.5301 395.09 67.0422C391.57 64.4302 388.651 61.6497 388.308 60.4701C386.591 53.5609 390.368 42.186 396.721 35.4453C403.846 27.862 411.487 24.8287 422.389 25.1657C428.485 25.3343 430.717 25.8398 435.353 28.0305Z" fill="black"/>
    <path d="M123.896 181.634C116.685 183.993 109.388 190.481 105.954 197.812C103.808 202.446 103.464 204.131 103.464 210.703C103.464 217.612 103.722 218.876 106.297 223.932C113.68 238.761 133.168 245.333 147.676 238.087C153.17 235.307 159.351 229.156 162.013 223.847C164.159 219.635 164.416 218.202 164.416 210.703C164.416 203.204 164.159 201.772 162.013 197.559C155.231 183.909 138.49 177 123.896 181.634ZM132.138 193.936C134.541 196.969 134.37 199.16 131.451 203.625C126.987 210.619 119.604 212.136 116.942 206.659C115.226 203.204 116.342 200.339 120.977 195.789C125.957 190.902 129.305 190.397 132.138 193.936Z" fill="black"/>
    <path d="M357.403 181.128C349.419 183.656 342.293 190.228 338.43 198.317C336.542 202.445 336.198 204.299 336.198 211.124C336.198 220.982 338.001 225.279 345.212 232.273C351.307 238.171 357.574 240.867 365.73 240.867C379.809 240.951 390.883 233.452 395.862 220.477C401.013 206.995 393.802 189.975 379.895 183.234C373.456 180.117 363.412 179.19 357.403 181.128ZM364.871 193.598C368.649 197.474 364.7 206.49 358.089 209.186C355.428 210.281 354.741 210.281 352.853 209.27C350.277 207.922 348.989 204.552 349.762 201.518C350.02 200.339 351.994 197.643 353.969 195.536C358.347 191.07 361.867 190.481 364.871 193.598Z" fill="black"/>
    <path d="M227.085 205.479C211.633 211.124 201.932 223.931 200.387 240.53C198.498 260.415 212.405 279.289 233.696 285.777C239.362 287.462 239.276 286.872 235.155 297.742C231.12 308.358 224.853 315.857 216.354 320.323C214.037 321.587 211.547 321.924 205.623 321.924C198.927 321.924 197.296 321.587 193.519 319.649C188.969 317.29 183.99 312.487 181.414 307.853C180.298 305.746 179.869 303.219 179.869 297.91C179.955 291.928 180.298 289.822 182.359 285.272C186.479 275.919 185.449 270.695 178.581 266.061C173.602 262.775 168.365 263.954 163.215 269.684C151.625 282.66 150.595 305.494 160.725 322.177C166.906 332.204 178.581 341.64 188.711 344.59L194.034 346.19V369.614C194.034 390.595 194.206 393.459 195.751 398.431C200.558 413.597 214.38 424.551 230.176 425.73C236.014 426.236 243.997 424.551 247.861 422.107C249.578 421.012 250.179 421.096 253.012 422.444C264.944 428.342 280.225 426.236 291.987 417.22C297.309 413.092 301.258 407.783 304.091 400.79C305.894 396.409 306.066 394.471 306.495 371.299L306.924 346.527L311.388 345.011C323.235 341.051 332.249 334.31 339.031 324.368C344.096 316.953 346.758 309.285 347.444 300.438C348.474 286.451 342.723 271.874 333.966 266.061C328.129 262.1 320.059 264.797 317.14 271.537C315.423 275.498 315.595 277.351 318.685 284.85C322.548 294.456 322.548 301.365 318.599 308.611C315.509 314.256 311.216 318.132 305.035 320.829C299.713 323.104 289.84 322.682 284.26 319.902C276.362 315.857 268.808 305.662 264.343 293.108C262.111 286.704 262.197 286.367 266.06 285.693C270.095 285.019 278.508 281.227 283.745 277.688C291.128 272.717 297.91 261.763 300.142 251.315C304.263 232.189 291.386 211.04 272.07 205.142C267.692 203.794 264.172 203.541 249.578 203.625C233.782 203.625 231.807 203.794 227.085 205.479ZM268.893 228.65C272.07 231.515 272.499 235.391 270.009 238.087C268.55 239.688 267.434 239.772 250.522 239.772C233.782 239.772 232.58 239.688 230.949 238.087C228.373 235.559 228.631 230.925 231.464 228.397C233.782 226.291 233.953 226.291 249.921 226.291H266.146L268.893 228.65ZM270.782 341.303C272.156 342.146 275.246 343.494 277.65 344.337L282.028 345.769L282.286 368.013C282.457 389.584 282.457 390.258 280.569 393.881C277.736 399.189 274.817 401.127 269.151 401.127C265.202 401.127 264.172 400.79 261.94 398.684C260.48 397.251 258.935 394.976 258.506 393.459C258.077 392.027 257.991 377.535 258.248 361.273L258.677 331.698L263.485 335.742C266.146 337.933 269.408 340.461 270.782 341.303ZM242.796 363.463C242.538 390.595 242.366 393.881 240.993 395.903C236.014 403.318 225.969 403.065 220.819 395.397L218.501 392.027L218.243 369.362C217.986 348.213 218.071 346.696 219.531 346.275C223.823 344.927 233.61 339.703 237.387 336.754C239.791 334.9 242.023 333.383 242.366 333.383C242.71 333.299 242.967 346.865 242.796 363.463Z" fill="black"/>
    <path d="M55.3893 385.034C51.6979 386.635 49.2941 389.584 48.0923 393.796C46.7187 399.105 48.779 402.728 59.7676 414.356C83.2899 439.296 108.272 458.17 136.43 472.241C164.416 486.228 186.651 493.39 216.784 498.109C228.373 499.878 259.879 500.636 272.327 499.372C307.697 495.749 347.616 482.942 377.749 465.332C386.076 460.529 388.565 458.507 390.282 455.305C392.858 450.418 390.797 443.088 385.99 440.223C381.526 437.527 377.062 438.116 368.992 442.498C338.774 458.676 317.14 466.68 288.896 472.325C258.42 478.392 233.266 477.718 200.472 470.05C170.082 462.973 139.263 448.396 111.191 427.753C106.469 424.214 94.2785 413.344 84.1484 403.486C73.9325 393.712 64.5751 385.202 63.2873 384.781C60.1968 383.601 58.5657 383.685 55.3893 385.034Z" fill="black"/>
    </svg>  
  );
};
