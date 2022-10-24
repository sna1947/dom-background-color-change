//projects: background color change by clicking buttone

//step-1:  create a onload handlear
window.onload = () => {
    main()
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function () {
        const bgColor = backgroundRGBcolor();
        root.style.backgroundColor = bgColor;
    })

}
//step-2: random color generator function
function backgroundRGBcolor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}
//step-3:collect all necessary references
//step-4: handle the click event
