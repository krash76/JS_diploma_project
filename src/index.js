import {headerModal} from "./modules/headerModal.js";
import {timer} from "./modules/timer.js";
import {servicesModal} from "./modules/servicesModal.js";
import {certificateModal} from "./modules/certificateModal.js";
import {benefitsSlider} from "./modules/benefitsSlider.js";
import {toScrollUp} from "./modules/scroll.js";


const body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", 
 `<div class="header-modal header-modal--opened certificate-zoom-modal">
		<div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">
			<div class="fancybox-outer">
				<div class="fancybox-inner" style="overflow: hidden; width: auto; height: auto;">
					<div id="callback" class="order-call-modal box-modal" style="display: block;">
            <img class ="modal-img" src="" style="background-color: hsl(0, 0%, 90%); transition: background-color 300ms; max-width: 85vw; max-height: 75vh"></img>
          </div>
	      </div>
      </div>
    <span title="Close" class="header-modal__close certificate__close">x</span>
    </div>
  </div>`
); 

headerModal();
timer("07 Aprile 2022");
servicesModal();
certificateModal();
benefitsSlider();
toScrollUp();