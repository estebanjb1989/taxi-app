import React, { useRef } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Container = ({
    testID,
    flex,
    row,
    column,
    alignStart,
    alignCenter,
    alignEnd,
    justifyStart,
    justifyCenter,
    justifyEnd,
    justifySelfEnd,
    spaceBetween,
    spaceEven,
    children,
    style,
    padded,
    paddingX,
    paddingY,
    shadow,
    fullWidth,
    onPress,
    leftSide,
    rightSide,
    linearGradient,
    bottomRounded,
    background,
    roundBorders,
    onLayout,
    wrap,
}) => {
    const ref = useRef(null);

    const ContainerComponent = onPress
        ? TouchableOpacity
            : background
            ? ImageBackground
            : View;

    return (
        <ContainerComponent
            ref={ref}
            {...(background ? { source: background, } : {})}
            {...(background && roundBorders
                ? {
                    imageStyle: {
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                    },
                }
                : {})}
            {...(linearGradient ? { colors: linearGradient } : {})}
            testID={testID}
            disabled={!onPress}
            onPress={onPress}
            style={[
                styles.container,
                typeof flex === "boolean" && {
                    flex: 1,
                },
                typeof flex !== "boolean" && {
                    flex,
                },
                fullWidth && styles.fullWidth,
                column && styles.column,
                row && styles.row,
                justifyCenter && styles.justifyCenter,
                justifyStart && styles.justifyStart,
                justifyEnd && styles.justifyEnd,
                justifySelfEnd && styles.justifySelfEnd,
                alignStart && styles.alignStart,
                alignCenter && styles.alignCenter,
                alignEnd && styles.alignEnd,
                spaceBetween && styles.spaceBetween,
                spaceEven && styles.spaceEven,
                padded && styles.padded,
                paddingX && {
                    paddingHorizontal: parseInt(styles.padded.padding * paddingX),
                },
                paddingY && {
                    paddingVertical: parseInt(styles.padded.padding * paddingY),
                },
                shadow && styles.shadow,
                style,
                leftSide && styles.leftSide,
                rightSide && styles.rightSide,
                bottomRounded && styles.bottomRounded,
                wrap && styles.wrap,
            ]}
            onLayout={onLayout}
        >
            {children}
        </ContainerComponent>
    );
};

export default Container;
