import React from 'react';

const SpaceResultItem = () => {
	return (
		<div className="spaceListItem col-xs-12 col-sm-6 col-md-6">
			<div>
                <img src={require('../../assets/studio.jpg')} />
            </div>
            <div>
                <h3 className="spaceCardName">Pearl Studios</h3>
            </div>
            <div>
                <h4 className="spaceCardLocation">Georgetown, Washington D.C.</h4>
            </div>
            <div>
                <p>(icons go here)</p>
            </div>
		</div>
	);
};

export default SpaceResultItem;
