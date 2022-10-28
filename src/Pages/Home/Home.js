import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className='hero'>
                <div className='container'>
                    <div className='title'>
                        <h2> 'WELCOME TO E-LEARNERS Best Online Education Expertise' </h2>
                        <p>Anytime, Anywhere learn on your suitable Schedule. Expore us, and grow your knowledge and skills.</p>
                        <div className='button'>
                            <button className='primary-btn'>
                                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            <button>
                                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
        </div>
    );
};

export default Home;