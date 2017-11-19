import React from 'react';
import PropTypes from 'prop-types';

const SpaceResultItem = (name) => {
	return (
		<div className="spaceResultItem">
			<h2>{name}</h2>
		</div>
	);
};

SpaceResultItem.PropTypes = {
	name: PropTypes.string.isRequired
};

export default SpaceResultItem;
