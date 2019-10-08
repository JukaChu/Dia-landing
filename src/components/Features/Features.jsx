import React from "react";
import "./Features.css";
import { Container } from "../Container/Container";
import featurePic1 from "./feature-pic1.svg";
import featurePic2 from "./feature-pic2.svg";
import featurePic3 from "./feature-pic3.svg";
import { SimpleFeature } from "../SimpleFeature/SimpleFeature";

export function Features() {
  const featurePic = [featurePic1, featurePic2, featurePic3];
  const featureText =
    "By the same illusion which lifts the horizon of the sea to the level of the spectator " +
    "on a hillside, the sable cloud beneath was dished out.";

  return (
    <div className="features">
      <Container>
        <div className="features__container">
          <h1 className="features__title">Features</h1>
          <h2 className="features__subtitle">
            By the same illusion which lifts the horizon.
          </h2>
          {featurePic.map((pic, i) => {
            return (
              <SimpleFeature pic={pic} featureText={featureText} key={i} />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
