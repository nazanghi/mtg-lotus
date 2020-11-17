import React from 'react'
import Search from '../components/TextInput'
import Card from '../components/Card'


export default () => {
    return (
        <div className="home content-wrapper flex-col">
            <div className="content flex-col">
                <form>
                    <Search 
                        name="search" 
                        type="search"
                        placeholder="Look for a Card"
                    />
                </form>
                <div className="discover flex-col">
                    <p>this would be dope af if I could have it just phasing random cards in right here</p>
                    <section className="card-wrapper flex-row">
                        {/* <Card>
                            <div className="mask flex-col">
                                <div className="card-content">
                                    <h3>Testing it out</h3>
                                    <p> with some text here too </p>
                                </div>
                            </div>
                            <img 
                                src=""
                                alt=""
                            />
                        </Card>
                        <Card>
                            <div className="mask flex-col">
                                <div className="card-content">
                                    <h3>Testing it out2</h3>
                                    <p> with some text here too </p>
                                </div>
                            </div>
                            <img 
                                src=""
                                alt=""
                            />
                        </Card>
                        <Card>
                            <div className="mask flex-col">
                                <div className="card-content">
                                    <h3>Testing it out3</h3>
                                    <p> with some text here too </p>
                                </div>
                            </div>
                            <img 
                                src=""
                                alt=""
                            />
                        </Card> */}
                    </section>
                </div>
            </div>
        </div>
    )
}

//This whole page needs to be fleshed out but realistically
//I think it's the last thing I'll do because I've got the otehr stuff that needs 
//to be worked out
//for now this is a working thing that I can visually see and adjust 