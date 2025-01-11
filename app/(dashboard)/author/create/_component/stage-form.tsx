'use client'
import React, { useState } from 'react'
import { Layer, Rect, Stage } from 'react-konva'

const StageForm = () => {
      const [color, setColor] = useState('#222'); // Default color
      return (
       <Stage  width={500} height={450}>
        <Layer>
               <Rect
                      width={500}
                      height={450}
                      fill={color}
                      cornerRadius={10}
                      shadowBlur={10}
                    />
        
        </Layer>
        </Stage>
  )
}

export default StageForm