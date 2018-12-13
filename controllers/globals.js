let title = ['10% Discount on couch', 'Student Discount', '15% Before Christmas']
let description = ['Today at Jönköping IKEA Sverige, we purpose to all 10% discount if they by a a new sofa.',
'On a new Maxi Best-of menu purchased you can get a new sandwitches for free in presentation of a valid student card',
'Time to choose a gift come at all H& in Jönköping ciy to obtain your 15% discount.' ]
let position = ['IKEA Sverige,\nAsecs,\nKompanigatan 6', 'McDonalds Hagaleden 3', 'All city H&M']
let path = [require('../assets/images/ikea.png'), require('../assets/images/mcdo.png'), require('../assets/images/hm.png')]
let favorites = [false, false]
let listFavIsEmpty = true
let nearDiscounts = false

const ListFav = (i) => {
    if (listFavIsEmpty)
        listFavIsEmpty =false;
        else
        listFavIsEmpty = true;
};

const ListFavByIdx = (i, l) => {
    favorites[i] = l;
};

const globali = {
    title,
    description,
    position,
    favorites,
    listFavIsEmpty,
    nearDiscounts,
    ListFav,
    ListFavByIdx,
    path,
};

module.exports = globali;