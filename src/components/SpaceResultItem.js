import React from 'react';
import PropTypes from 'prop-types';

const SpaceResultItem = () => {
	return (
		<div className="spaceResultItem">
			<h2>{this.props.name}</h2>
		</div>
	);
};

SpaceResultItem.PropTypes = {
	name: PropTypes.string.isRequired,

};

export default SpaceResultItem;
