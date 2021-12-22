import {combineReducers } from "redux";
import topPlacesReducer from './topPlaces'
import { selectedTopPlaceReducer } from "./topPlaces";
import infoReduser from "./info";
import toursReducer from "./tour";
import { selectedTourReducer } from "./tour";
import { blogReducer, selectedBlogReducer } from "./Blog";
import { guestsCommentsReduser } from "./info";
import aboutKyrgyzstanReduser from "./aboutKyrgyzstan"

const rootReducer=combineReducers({
    topPlaces:topPlacesReducer,
    selectedtopPlace:selectedTopPlaceReducer,
    info:infoReduser,
    tours:toursReducer,
    selectedTour:selectedTourReducer,
    blog:blogReducer,
    selectedBlog:selectedBlogReducer,
    guestsComments:guestsCommentsReduser,
    aboutKyrgyzstan: aboutKyrgyzstanReduser,

});

export default rootReducer;