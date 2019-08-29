import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const{
            image_url,
            title,
            source_url,
            publisher,
            recipe_id
        } = this.props.recipe;
        const {handleDetails} = this.props;
        return (
            <React.Fragment>
                 <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                     <div className="card">
                       <img className="card-img-top"
                        src={image_url}
                        style={{height1:'14rem'}}
                         alt="" />
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">{publisher}</h6>
                        </div>
                        <div className="card-footer text-muted">
                            <button
                                className="btn btn-primary text-capitalize" 
                                onClick={() => handleDetails(0, recipe_id)}
                                type="button"
                            >
                                details
                            </button>
                            <a 
                                className="btn btn-success mx-2 text-capitalize"
                                href={source_url} 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                recipe url
                            </a>
                        </div>
                     </div>
                 </div>
            </React.Fragment>
        )
    }
}
