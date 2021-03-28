import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, Text } from "@chakra-ui/react";
import { useActivityContext } from "../../../Context/context";

interface BarChartProps {
  date: string;
}

function BarChart({ date }: BarChartProps) {
  const { activities } = useActivityContext();

  const keys: string[] = [];
  for (var i = 6; i >= 0; i--) {
    keys.push(date.slice(0, 8) + (Number(date.split("-")[2]) - i));
  }

  const barChartData = keys.map((date) => {
    const values = {
      date,
      swim: 0,
      eat: 0,
      work: 0,
      sleep: 0,
      football: 0,
    };
    activities
      .filter((el) => {
        return el.date === date;
      })
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
        return (values[el.activity] = values[el.activity] + Number(hours));
      });
    return values;
  });

  return (
    <Box h="500px" w="1000px" m="auto" mt={20}>
      <Text fontWeight="bold" fontSize={20}>
        Bar Chart
      </Text>
      <ResponsiveBar
        data={barChartData}
        keys={["sleep", "work", "swim", "eat", "football"]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="stacked"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Activity",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "# of hours",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Box>
  );
}

export default BarChart;
