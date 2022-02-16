import './Teammate__Card.css';

export default function Teammate__Card({ margin }) {
    return (
        <div style={{margin: `${margin}`}} className='teammate-Card'>
            <img src="https://i.ibb.co/JK3Crg2/image.png" alt="image"></img>
            <div className='teammate-Card__description'>
                <p>Инструктор<br></br>Серёжа Попов</p>
                <p>Хатха-йога</p>
            </div>

            <div className='teammate-Card__media'>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8574 8.91937C15.8144 8.8405 15.5484 8.20732 14.2683 6.90591C12.9282 5.54315 13.1082 5.76443 14.7223 3.40809C15.7054 1.97303 16.0984 1.09665 15.9754 0.722004C15.8584 0.364883 15.1353 0.459093 15.1353 0.459093L12.7312 0.474429C12.7312 0.474429 12.5531 0.448138 12.4201 0.53468C12.2911 0.620126 12.2081 0.81731 12.2081 0.81731C12.2081 0.81731 11.8271 1.92811 11.3191 2.8724C10.248 4.86505 9.81894 4.97022 9.64393 4.84643C9.2369 4.55832 9.33891 3.68743 9.33891 3.06959C9.33891 1.13828 9.60593 0.333114 8.81787 0.124976C8.55585 0.0559615 8.36384 0.00995199 7.69479 0.00228373C6.83673 -0.00757546 6.10967 0.00557012 5.69864 0.225759C5.42462 0.372551 5.21361 0.700095 5.34262 0.718718C5.50163 0.741723 5.86165 0.824978 6.05267 1.1098C6.29969 1.47678 6.29068 2.30276 6.29068 2.30276C6.29068 2.30276 6.4327 4.57585 5.95966 4.85848C5.63464 5.05238 5.1896 4.65692 4.23453 2.8483C3.7455 1.92263 3.37547 0.898375 3.37547 0.898375C3.37547 0.898375 3.30447 0.707763 3.17746 0.605885C3.02345 0.482098 2.80743 0.442661 2.80743 0.442661L0.521262 0.457997C0.521262 0.457997 0.178236 0.468952 0.0522271 0.632177C-0.0597811 0.777873 0.0432264 1.07803 0.0432264 1.07803C0.0432264 1.07803 1.83336 5.66474 3.85951 7.97727C5.71864 10.097 7.8288 9.95787 7.8288 9.95787H8.78487C8.78487 9.95787 9.07389 9.92282 9.2209 9.74864C9.35691 9.5887 9.35191 9.28854 9.35191 9.28854C9.35191 9.28854 9.33291 7.88306 9.92895 7.67602C10.516 7.47226 11.2701 9.03439 12.0691 9.6358C12.6732 10.0904 13.1322 9.99073 13.1322 9.99073L15.2693 9.95787C15.2693 9.95787 16.3874 9.88228 15.8574 8.91937Z" fill="#8B7EAC" fillOpacity="0.65" />
                </svg>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9606 5.335C16.9715 5.25429 17.6573 4.80953 17.9212 4.20606C17.5565 4.42285 16.4245 4.6592 15.7993 4.43411C15.7686 4.29196 15.7344 4.15694 15.7008 4.03504C15.2244 2.34228 13.5934 0.978527 11.8844 1.14328C12.0227 1.08925 12.1629 1.03895 12.3027 0.993795C12.4909 0.928593 13.5945 0.754813 13.4207 0.377812C13.2743 0.046209 11.9258 0.628417 11.6719 0.704514C12.0071 0.582532 12.5614 0.372709 12.6208 0C12.1073 0.0681592 11.6032 0.303091 11.2137 0.644697C11.3543 0.498214 11.461 0.319696 11.4836 0.127571C10.1141 0.974275 9.31406 2.68129 8.66661 4.33716C8.15823 3.86037 7.70764 3.48491 7.30342 3.27642C6.16943 2.68793 4.81356 2.07393 2.68516 1.30932C2.61984 1.99079 3.03343 2.89691 4.22521 3.49948C3.967 3.46603 3.49482 3.54067 3.11717 3.62819C3.27097 4.40888 3.77324 5.05208 5.133 5.36311C4.51158 5.4028 4.19043 5.53964 3.89937 5.83459C4.1824 6.37756 4.87303 7.01659 6.11541 6.88541C4.73414 7.46154 5.5522 8.52848 6.67614 8.36936C4.75878 10.2859 1.73586 10.145 0 8.54205C4.53221 14.5185 14.3842 12.0765 15.8524 6.32005C16.9524 6.32912 17.599 5.95131 18 5.53478C17.3662 5.63886 16.4476 5.5313 15.9606 5.335Z" fill="#8B7EAC" fillOpacity="0.65" />
                </svg>
            </div>


        </div>
    )
}
