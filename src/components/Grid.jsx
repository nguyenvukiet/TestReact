import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const styles = {
        gap: props.gap ? `${props.gap}px` : '0'
    }

    const col = props.col ? `grid-col-${props.col}` : ''
    const mdcol = props.mdCol ? `grid-col-md-${props.mdCol}` : ''
    const smcol = props.smCol ? `grid-col-sm-${props.smCol}` : ''


  return (
    <div className = {`grid ${col} ${mdcol} ${smcol}`} style = {styles}>
        { props.children }
    </div>
  )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid

