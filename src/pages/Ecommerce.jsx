import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () =>
{
	const { currentColor } = useStateContext();

	return (
		<div className="mt-12" style={{ color: currentColor }}>
		</div >
	);
};

export default Ecommerce;
