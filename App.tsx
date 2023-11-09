import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Canvas, Rect, Text, useFont} from '@shopify/react-native-skia';

const text1 = 'sm case';
const text2 = 'CamelCase';

function App(): JSX.Element {
  const font1 = useFont(require('./assets/OpenSans-Regular.ttf'), 10);
  const font2 = useFont(require('./assets/OpenSans-Regular.ttf'), 20);
  const font3 = useFont(require('./assets/OpenSans-Regular.ttf'), 30);

  if (!font1 || !font2 || !font3) {
    return <></>;
  }

  const textBounds1 = font1.measureText(text1);
  const textBounds2 = font1.measureText(text2);

  const textBounds3 = font2.measureText(text1);
  const textBounds4 = font2.measureText(text2);

  const textBounds5 = font3.measureText(text1);
  const textBounds6 = font3.measureText(text2);

  console.log(
    textBounds1.height,
    textBounds2.height,
    textBounds3.height,
    textBounds4.height,
    textBounds5.height,
    textBounds6.height,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Canvas style={styles.canvas}>
        <Rect
          rect={{
            width: textBounds1.width,
            height: -textBounds1.height,
            x: 30,
            y: 30,
          }}
          color="red"
          opacity={0.5}
        />
        <Text font={font1} text={text1} y={30} x={30} color="black" />

        <Rect
          rect={{
            width: textBounds2.width,
            height: -textBounds2.height,
            x: 30,
            y: 60,
          }}
          color="red"
          opacity={0.5}
        />
        <Text font={font1} text={text2} y={60} x={30} color="black" />

        <Rect
          rect={{
            width: textBounds3.width,
            height: -textBounds3.height,
            x: 30,
            y: 100,
          }}
          color="red"
          opacity={0.5}
        />
        <Text font={font2} text={text1} y={100} x={30} color="black" />

        <Rect
          rect={{
            width: textBounds4.width,
            height: -textBounds4.height,
            x: 30,
            y: 130,
          }}
          color="red"
          opacity={0.5}
        />
        <Text font={font2} text={text2} y={130} x={30} color="black" />

        <Rect
          rect={{
            width: textBounds5.width,
            height: -textBounds5.height,
            x: 30,
            y: 180,
          }}
          color="red"
          opacity={0.5}
        />
        <Text font={font3} text={text1} y={180} x={30} color="black" />

        <Rect
          rect={{
            width: textBounds6.width,
            height: -textBounds6.height,
            x: 30,
            y: 220,
          }}
          color="red"
          opacity={0.5}
        />
        <Text font={font3} text={text2} y={220} x={30} color="black" />
      </Canvas>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
  },
});

export default App;
