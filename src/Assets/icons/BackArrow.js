import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrowIcon = props => {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg height="20" width="20" viewBox="0 0 64 64">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M54 30H14.101l15.278-14.552a2 2 0 10-2.759-2.897L9.172 29.171A3.978 3.978 0 008 32c0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552a1.999 1.999 0 001.38-3.448L14.038 34H54a2 2 0 000-4z"
      />
    </Svg>
  );
};

export default BackArrowIcon;