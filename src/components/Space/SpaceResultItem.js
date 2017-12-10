import React from 'react';

const SpaceResultItem = () => {
	return (
            <div className="spaceListItem col-xs-12 col-sm-6 col-md-6">
                <div>
                    <img src={require('../../assets/paint.jpg')} />
                </div>

                <div className="spaceCardDetails">
                    <h3 className="spaceCardName">Pearl Studios</h3>
                    <h4 className="spaceCardLocation">Georgetown, Washington D.C.</h4>
                    <p className="spaceCardIcons">(icons go here)</p>
                </div>
                <div className="spaceCardPricing">
                    <p className="pricingCost">$30</p>
                </div>

            </div>
	);
};

export default SpaceResultItem;
