import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        Larry Banta was born and raised in Ohio, on a farm near Cincinnati. Upon graduating high school in Lebanon, Ohio, he left for college in Lincoln, Nebraska, where he obtained a BS in microbiology. From there, he attended University of Nebraska Medical College, where he was awarded his MD degree. <br/> <br/>

During his junior year in college, everything changed for him when he accepted Christ into his life. He soon met and married Ellen Fairbrother, a missionary kid from India. The two shared a passion for children and for missions. On a Reader’s Digest Medical Assistance Program scholarship, he was able to complete the last three months of medical school at an orphanage in India, where he was introduced to foreign missions. During the couple’s time in India, Ellen started a preschool, while Larry helped design a mission hospital and assess local medical needs.<br/> <br/>
                        </p>

                        <h1 className="author-name-tag" >
                            <span></span>
                            <span>Dr. Larry E. Banta</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>

                        <button className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;