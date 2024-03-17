import Head from "next/head"
import styles from "../styles/Userguide.module.css"

export default function Userguide() {
    return <>
        <Head>
            <title>How to Use Ecobust Non Explosive Demolition Powder | ECOBUST</title>
            <meta name="description" content="Yes, Ecobust is a safe and eco-friendly alternative to traditional demolition methods. Our non-explosive powder allows for the efficient breaking of concrete and rock without the risks associated with explosives" />
        </Head>
        <div className={styles.userguidesec}>
            <div className={styles.steptitle}>
                <h1 data-aos="fade-left">STEPS TO USE ECOBUST</h1>
                <div class={styles.top_bg}>
                    <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
                        <path class="g_fill_1" d="M100,7C66.7,7,33.4,7,0,7c0-2.5,0-4.5,0-7h100C100,2.5,100,4.5,100,7z" fill="#eeeeee"></path>
                        <linearGradient id="fill_1">
                            <stop class="g_fill_2" offset="0" stop-color="currentcolor"></stop>
                            <stop class="g_fill_3" offset="1" stop-color="currentcolor"></stop>
                        </linearGradient>
                        <path d="M0-1c0,1,0,3,0,4c20,3.3,38.3,3.3,55,0s31.7-3.7,45-1c0-0.7,0-2.3,0-3C66.7-1,33.3-1,0-1z" fill="#0080003b"></path>
                        <clipPath id="clip_1">
                            <path d="M0,0c0,1,0,2,0,3c20,3.3,38.3,3.3,55,0s31.7-3.7,45-1c0-0.7,0-1.3,0-2C66.7,0,33.3,0,0,0z"></path>
                        </clipPath>
                        <path clip-path="#fff" d="M0,6c20-8,40-8,60,0C40,6,20,6,0,6z" fill="#eeeeee" opacity=".5"></path>
                    </svg>
                </div>
            </div>
            <div className={styles.sefety_sec} data-aos="fade-right">
                <img src="/img/warning.png" alt="IMG" />
                <h2 data-aos="fade-left">!! SEFETY GOGGLES AND RUBBER HAND GLOVES MUST BE WORN DURING OPPERATION !!</h2>
            </div>
            <div className={styles.userguide_cards}>
                <div className={styles.guide_max}></div>
                <div className={styles.guide_cards_sec}>
                    <div className={styles.guide_cards}>
                        <div className={styles.guide_img}>
                            <img src="/img/drill.png" alt="" />
                        </div>
                        <div className={styles.info_guide}>
                            <h4>Step 01.</h4>
                            <h1>Drill</h1>
                            <h2>First, drill a hole in the stone whare you want to split the stone.</h2>
                        </div>
                    </div>
                    <div className={styles.guide_cards}>
                        <div className={styles.guide_img}>
                            <img src="/img/mix.png" alt="" />
                        </div>
                        <div className={styles.info_guide}>
                            <h4>Step 02.</h4>
                            <h1>Mix</h1>
                            <h2>Second, pour some of the ECOBUST into the bucket with water, the proportion of water and supplies is 1:3, and then stir it into a paste.</h2>
                        </div>
                    </div>
                    <div className={styles.guide_cards}>
                        <div className={styles.guide_img}>
                            <img src="/img/pour.png" alt="" />
                        </div>
                        <div className={styles.info_guide}>
                            <h4>Step 03.</h4>
                            <h1>Pour</h1>
                            <h2>Third, slowly pour it in to the drill hole and fill it with the lid uncovered.</h2>
                        </div>
                    </div>
                    <div className={styles.guide_cards}>
                        <div className={styles.guide_img}>
                            <img src="/img/crack.png" alt="" />
                        </div>
                        <div className={styles.info_guide}>
                            <h4>Step 04.</h4>
                            <h1>Crack</h1>
                            <h2>Fourth, about two to eight hours later, the stone gets crack/split. You can choose the ECO BUST based on temperature of rock and time lapse for chemical reaction that you required.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.main_descrip}>
                <img data-aos="fade-right" src="/img/important.png" alt="" />
                <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"><strong>Important Notice:</strong> The process in short- drilling mixing/stirring-pouring-blasting the maximum expansion fouce can be reached within 10 minutes. The reacting time can be also modified between 2 hours to 8 hours.</h2>
            </div>
        </div>

        <div className={styles.typeofeco} >
            <table>
                <thead>
                    <tr>
                        <td>Type</td>
                        <td>Usable temperature</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Eco bust 1st</td>
                        <td>5°C - 15°C</td>
                    </tr>
                    <tr>
                        <td>Eco bust 2nd</td>
                        <td>15°C - 25°C</td>
                    </tr>
                    <tr>
                        <td>Eco bust 3rd</td>
                        <td>25°C - 40°C and above</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex" >
                <img src="/img/arrowuserleft.png" alt="" />
                <h3>Type Of ECOBUST</h3>
            </div>
        </div>
        <div className={styles.holediameter}>
            <h3>② Quantity of HIGH RANGE SOUNDLESS CRACKING AGENT used per 1m depth of hole diameters:</h3>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Hole meseaurment (mm)</strong></td>
                        <td><strong>Quantity used in (Kg)</strong></td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>1.3</td>

                    </tr>
                    <tr>
                        <td>34</td>
                        <td>1.5</td>

                    </tr>
                    <tr>
                        <td>36</td>
                        <td>1.7</td>

                    </tr>
                    <tr>
                        <td>38</td>
                        <td>1.9</td>

                    </tr>
                    <tr>
                        <td>40</td>
                        <td>2.1</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </>
}