import { SubAgentStateService } from '../../Services/sub-agent-state.service';

export class SubAgentGeneralHelper {

  constructor(private subagentState: SubAgentStateService) { }


  /**
   * function to process filter
   * @param hotelList to indicate FilterStatus based on filter response
   * @returns hotelList
   */
  processHotelFilter(hotelList) {
    let flag: boolean = false;
    if (this.subagentState && this.subagentState.FilterModel) {
      if (this.subagentState.FilterModel.Amenities && this.subagentState.FilterModel.Amenities.length > 0) {
        let checkedAmenities = this.subagentState.FilterModel.Amenities.filter(amenities => amenities.Tounched == true);
        if (checkedAmenities.length > 0) {
          if (hotelList && hotelList.length > 0) {
            hotelList.forEach(hotelList => {
              flag = false;
              if (hotelList.amenities && hotelList.amenities.length > 0) {
                hotelList.amenities.forEach(amenities => {
                  if ((checkedAmenities.filter(keyAm => keyAm.Name == amenities.name)).length > 0) {
                    flag = true;
                  }
                });
              }
              if (!flag) {
                hotelList.FilterStatus = false;
                this.subagentState.FilterModel.FilterApplied = true;
              }
            });
          }
        }
      }
      if (this.subagentState.FilterModel.StarRating && this.subagentState.FilterModel.StarRating.length > 0) {
        let checkedRatings = this.subagentState.FilterModel.StarRating.filter(rating => rating.Tounched == true);
        if (checkedRatings.length > 0) {
          if (hotelList && hotelList.length > 0) {
            hotelList.forEach(hotelList => {
              flag = false;
              if ((checkedRatings.filter(keyAm => keyAm.Type == hotelList.rating)).length > 0) {
                flag = true;
              }
              if (!flag) {
                hotelList.FilterStatus = false;
                this.subagentState.FilterModel.FilterApplied = true;
              }
            });
          }
        }
      }
      if (this.subagentState.FilterModel.PriceRange) {
        hotelList = this.filterHotelListWithPriceRange(hotelList);
      }
    }
    return hotelList;
  }

  /**
   * to reset the filterModel by making all tounched as false
   */
  resetFilterModel() {
    if (this.subagentState && this.subagentState.FilterModel) {
      if (this.subagentState.FilterModel.Amenities && this.subagentState.FilterModel.Amenities.length > 0) {
        this.subagentState.FilterModel.Amenities.forEach(element => {
          if (element.Tounched)
            element.Tounched = false;
        });
      }
      if (this.subagentState.FilterModel.StarRating && this.subagentState.FilterModel.StarRating.length > 0) {
        this.subagentState.FilterModel.StarRating.forEach(element => {
          if (element.Tounched)
            element.Tounched = false;
        });
      }
    }
    this.subagentState.FilterModel.FilterApplied = false;
    this.subagentState.FilterModel.PriceRange = 1000;
  }

  /**
   * to filter hotel list with price range
   * @param hotelList to indicate FilterStatus based on filter response
   * @returns hotelList
   */
  filterHotelListWithPriceRange(hotelList) {
    if (hotelList) {
      hotelList.forEach(list => {
        if (list.amount > this.subagentState.FilterModel.PriceRange) {
          list.FilterStatus = false;
        }
      });
    }
    return hotelList;
  }
}