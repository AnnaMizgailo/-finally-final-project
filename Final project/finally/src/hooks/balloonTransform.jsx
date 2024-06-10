import PropTypes from "prop-types";

export const balloonTransform = (props) => {

    const code = `<h1>$[properties.balloonName]</h1>
                <img src=$[properties.balloonUrl]>
                <p>$[properties.balloonText]</p>`

const layout = props.ymaps.templateLayoutFactory.createClass(
    code, 
    {
        build: 
        function() {
            layout.superclass.build.call(this);
        }
    }
);
return layout;
}


