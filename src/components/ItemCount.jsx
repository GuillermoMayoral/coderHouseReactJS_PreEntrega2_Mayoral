import { useContext, useState } from "react";
import {
    Text,
    ButtonGroup,
    IconButton,
    Tooltip,
    Center,
    Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock, id, price, name }) => {
    const [count, setCount] = useState(1);

    const addOne = () => {
        setCount(count + 1);
    };

    const lessOne = () => {
        setCount(count - 1);
    };

    return (
        <>
            <ButtonGroup size="sm" isAttached variant="outline">
                {count <= 1 ? (
                    <Tooltip label="No puedes tener menos de un producto" placement="bottom">
                        <IconButton icon={<MinusIcon />} isDisabled />
                    </Tooltip>
                ) : (
                    <IconButton icon={<MinusIcon />} onClick={lessOne} />
                )}
                <Center>
                    <Button
                        onClick={() => addToCart()}
                        variant="solid"
                        colorScheme="blue"
                    >
                        Add to cart: {count}
                    </Button>
                </Center>
                {count < stock ? (
                    <IconButton icon={<AddIcon />} onClick={addOne} />
                ) : (
                    <Tooltip label="Has alcanzado el maximo Stock" placement="bottom">
                        <IconButton icon={<AddIcon />} isDisabled />
                    </Tooltip>
                )}
            </ButtonGroup>
        </>
    );
};

export default ItemCount;
