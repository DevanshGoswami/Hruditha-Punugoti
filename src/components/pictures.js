import React from 'react';
import axios from 'axios';
import { Loader } from './loader';



class Pictures extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          pictures : [], 
          loading : false
        }

        this.renderPictures = this.renderPictures.bind(this);
    }

    componentDidMount = async() =>{
        this.setState({loading: true});
        const response = await axios.get(process.env.REACT_APP_URL + "hrudita-punugoti");
        let pictures = response.data;
        pictures.forEach(picture => {
           this.setState({pictures : this.state.pictures.concat(picture)});
        });
        this.setState({loading: false});
    }

    renderPictures = (picture, index) => {
        return(
            <article key={index} id={picture._id} class="style1">
                <span class="image">
                    <img src={picture.url} alt={picture.heading} />
                </span>
                <a href={"#" + picture._id}>
                    <h2>{picture.heading}</h2>
                    <div class="content">
                        <p>{picture.description}</p>
                    </div>
                </a>
            </article>
        );
    }

    

    render(){
        return(
            <>   
            <section class="tiles">
            {this.state.loading ? <Loader/> : this.state.pictures.map(this.renderPictures) }
            </section>
            </>
        );
    }
}


export default Pictures;