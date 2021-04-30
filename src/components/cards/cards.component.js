/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {Link} from 'react-router-dom';

import './cards.styles.css';
import stickermule from '../../img/stickermule.png';
import hairtoppers from '../../img/hairtoppers.png';
import pannier from '../../img/bike-pannier.png';
import stickers from '../../img/stickers.png';
import frontend from '../../img/frontend.png';
import partwheeler from '../../img/partwheeler.png';

const Card = () => (
    <>
        <div className="box-wrapper">
        
        <div className="shape-box shape-box_half">
            <img src={frontend} alt=""/>
            <div class="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div class="show-cont">
                    <h3 class="card-no">Frontend Dev</h3>
                    <h4 class="card-main-title">Frontend Challenges</h4>
                </div>
                <p class="card-content">A collection of frontend challenges from frontendmentor.io</p>
                <a href="https://vercel.com/dashboard/projects" target="_blank" rel="noreferrer" class="read-more-btn">Read More</a>
            </figcaption>
            <span class="after"></span>
        </div>

        <div className="shape-box shape-box_half">
            <img src={partwheeler} alt=""/>
            <div class="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div class="show-cont">
                    <h3 class="card-no">Frontend Dev</h3>
                    <h4 class="card-main-title">Website for Partwheeler</h4>
                </div>
                <p class="card-content">Designed a React site for used car parts implementing the Auction Nugget Ebay Tool</p>
                <a href="https://www.partwheeler.com/" target="_blank" rel="noreferrer" class="read-more-btn">Read More</a>
            </figcaption>
            <span class="after"></span>
        </div>

        <div className="shape-box shape-box_half">
            <img src={stickermule} alt=""/>
            <div class="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div class="show-cont">
                    <h3 class="card-no">UX Design</h3>
                    <h4 class="card-main-title">Proof Redesign Concept</h4>
                </div>
                <p class="card-content">Sticker Mule offers a variety of custom printed products. I wanted to review the proofing process to help customers understand their proofs and avoid printing errors.</p>
                <Link to="/case-study" class="read-more-btn">Read More</Link>
            </figcaption>
            <span class="after"></span>
        </div>

        
        <div class="shape-box shape-box_half">
            <img src={hairtoppers} alt=""/>
            <div class="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div class="show-cont">
                    <h3 class="card-no">UX Design</h3>
                    <h4 class="card-main-title">Website for hairtoppers</h4>
                </div>
                <p class="card-content">Hair toppers offer a solution for thinning hair or adding volume to your hair. The client wanted a website to help customers understand how their products work and how to use hairtoppers.</p>
                <Link to="/hairtoppers" class="read-more-btn">Read More</Link>
            </figcaption>
            <span class="after"></span>
        </div> 

        <div class="shape-box shape-box_half">
            <img src={pannier} alt=""/>
            <div class="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div class="show-cont">
                    <h3 class="card-no">Industrial Design</h3>
                    <h4 class="card-main-title">Bike Tote Pannier</h4>
                </div>
                <p class="card-content">The challenge was to design a pannier tote bag from repurposed banners that can be used on and off a bike</p>
                <Link to="/design" class="read-more-btn">Read More</Link>
            </figcaption>
            <span class="after"></span>
        </div>  

        <div class="shape-box shape-box_half">
            <img src={stickers} alt=""/>
            <div class="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div class="show-cont">
                    <h3 class="card-no">Illustration</h3>
                    <h4 class="card-main-title">Sticker designs</h4>
                </div>
                <p class="card-content">Developed a line of stickers for outdoor enthusiasts.</p>
                <a href="https://www.etsy.com/shop/yamagear" target="_blank" rel="noreferrer" class="read-more-btn">Read More</a>
            </figcaption>
            <span class="after"></span>
        </div>  
        </div>
    </>
    )

export default Card;