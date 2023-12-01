import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUsers,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
function FontIcons(props) {
  // alert(props.icon);
  return (
    <div>
      <p>
        <FontAwesomeIcon icon={props.icon} color={props.color} />
      </p>

      {/* <FontAwesomeIcon icon={faDollarSign} beatFade /> */}
    </div>
  );
}

export default FontIcons;
