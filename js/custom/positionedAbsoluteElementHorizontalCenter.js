/**
 * Centering element with position: absolute in container block
 */
function positionedAbsoluteElementHorizontalCenter(containerSelector,elementSelector){
    var container = document.querySelector(containerSelector),
        element = container.querySelector(elementSelector),
        elementWidth = element.clientWidth,
        containerWidth = container.clientWidth,
        leftIndent = (containerWidth / 2) - (elementWidth / 2);

    element.style.left = ''+leftIndent+'px';
}