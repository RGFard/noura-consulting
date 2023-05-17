import React from "react";

import Service from "./Service";

const service1 = {
    title: "Ethereum Applications, Smart Contracts, and Web3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Eget felis eget nunc lobortis mattis.A condimentum vitae sapien pellentesque habitant morbi tristique."
};
const service2 = {
    title: "Mobile Native Apps for Ethereum",
    text: "Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu.Lorem ipsum dolor sit amet consectetur adipiscing. Accumsan sit amet nulla facilisi.A condimentum vitae sapien pellentesque habitant morbi tristique."
};
const service3 = {
    title: "Consolidated APIs",
    text: "Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. In iaculis nunc sed augue.Natoque penatibus et magnis dis parturient montes.Quisque egestas diam in arcu cursus euismod.Interdum varius sit amet mattis vulputate enim nulla."
};

var services = [service1, service2, service3];

const Services = () => {
    return (
        <section className="services">
            <div className="services__title">
                <h2 className="heading-2 heading-2--dark">Services</h2>
            </div>
            <Service services={services} />
        </section>
    );
};

export default Services;