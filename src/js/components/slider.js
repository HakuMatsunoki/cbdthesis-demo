//slider launcher
export function sliderLaunch(SLIDERS, CONFIGS) {

    if (SLIDERS.length === CONFIGS.length) {

        for (let i = 0; i < SLIDERS.length; i++) {
            new Glide(SLIDERS[i], CONFIGS[i]).mount();
        }
    }
}