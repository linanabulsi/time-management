import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useForm } from "react-hook-form";
import BarChart from "../../components/Charts/barChart/BarChart";
import PieChart from "../../components/Charts/pieChart/PieChart";

function Dashboard() {
  const { register, handleSubmit, watch } = useForm<String>({ mode: "onBlur" });
  const date: string = watch("date");

  const onSubmit = (data: any) => {
    return (
      <>
        <PieChart date={data} />
        <BarChart date={date} />
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mr={10} w={60} float="right">
          <FormLabel ml={3} mt={4}>
            Date
          </FormLabel>
          <Input
            name="date"
            type="date"
            ref={register({ required: true })}
            max={new Date().toJSON().slice(0, 10)}
          />
        </FormControl>
      </form>
      {date && <PieChart date={date} />}
      {date && <BarChart date={date} />}
    </>
  );
}

export default Dashboard;
