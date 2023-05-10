import { Fragment } from "react";
import Button from "./Button";

const EmptyBasket = (props) => {
    return (
        <Fragment>
            <h1 className="py-10">
                Your bakset is empty right now :(
            </h1>
            <Button title={'Choose your coffee'} />
        </Fragment>
    );
}

export default EmptyBasket;