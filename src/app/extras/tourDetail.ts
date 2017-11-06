import { Tour } from "./tour";
import {Comment} from './comment'

export class TourDetail {

    constructor(
        public tour:Tour,
        public comments:Array<Comment>
    )
    {

    }

}