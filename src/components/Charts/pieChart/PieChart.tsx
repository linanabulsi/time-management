import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ResponsivePie } from "@nivo/pie";
import { useActivityContext } from "../../../Context/context";

interface PieChartProps {
  date: string;
}

function PieChart({ date }: PieChartProps) {
  const { activities } = useActivityContext();

  const pieChartData = activities
    .filter((activity) => activity.date === date)
    .map((el) => {
      const mins =
        Number(el.endTime.split(":")[0]) * 60 +
        Number(el.endTime.split(":")[1]) -
        (Number(el.startTime.split(":")[0]) * 60 +
          Number(el.startTime.split(":")[1]));

      const hours =
        Math.floor(mins / 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) +
        "." +
        Math.floor(((mins % 60) / 60) * 100).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });

      return {
        id: el.activity,
        label: el.activity,
        value: hours,
      };
    });

  return (
    <Box h="500px" w="500px" m="auto" mt={10}>
      <Text fontWeight="bold" fontSize={20}>
        Pie Chart
      </Text>
      <ResponsivePie
        data={pieChartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}

export default PieChart;
