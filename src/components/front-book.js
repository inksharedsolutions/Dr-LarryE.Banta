import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book3.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >


                        <div className="content-wraps">

                            <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, and learn in various formats
                            </span>

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                            The primary purpose of this book is to assist those caring for children unable to be with their original parents. There are many reasons this occurs. Some might be truly orphaned, their parents having died from AIDS, Ebola, or another epidemic or because of an accident, war, terrorism, or some other illness or tragedy.
                            </p>

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/books">
                                    Read More
                                </Link>
                            </button>

                        </div>
                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" alt="book cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook