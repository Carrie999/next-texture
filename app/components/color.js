import React, { useState } from 'react';

import ColorPicker from 'react-pick-color';

export default function Chess({ color, setColor }) {
    const [visible, setVisible] = useState(false);
    return <div style={{ display: 'inline-block' }}>
        <div
            onClick={() => setVisible(!visible)}
            style={{
                width: 20,
                height: 20,
                borderRadius: '4px',
                border: '1px solid #999',
                backgroundColor: color,
            }}
        />
        <div className='absolute 0'>
            {visible && <ColorPicker visible={visible} style={{ position: 'absolute', zIndex: '1000' }} color2={color} onChange={color => setColor(color.hex)} />}
        </div>
    </div>


}

