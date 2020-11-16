import React from 'react'

export default ({ children, ...rest }) => {
    return (
        <div className="card" {...rest}>
            {children}
        </div>
    )
}

// okay I need to figure out how to do this shit.