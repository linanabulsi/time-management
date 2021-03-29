import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Select,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { Activity, useActivityContext } from "../../Context/context";
import axios from "../../axios-activities";

function AddNewTime() {
  const { activities, setActivities } = useActivityContext();
  const { register, handleSubmit } = useForm<Activity>();
  const onSubmit = (data: Activity, e: any) => {
    setActivities([...activities, data]);

    axios.post('/activities.json',data)
    .then(res => console.log({res}))
    .catch(err => console.log({err}));

    e.target.reset(); 
  };

  return (
    <Box m={5} w={60}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel ml={6}>Start</FormLabel>
          <Input
            name="startTime"
            type="time"
            ref={register({ required: true })}
            m={3}
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={6}>End</FormLabel>
          <Input
            name="endTime"
            type="time"
            ref={register({ required: true })}
            m={3}
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={6}>Date</FormLabel>
          <Input
            name="date"
            type="date"
            max={new Date().toJSON().slice(0, 10)}
            ref={register({ required: true })}
            m={3}
          />
        </FormControl>
        <FormControl>
          <FormLabel ml={6}>Activity</FormLabel>
          <Select
            name="activity"
            ref={register({ required: true })}
            placeholder="Select option"
            m={3}
          >
            <option value="sleep">Sleep</option>
            <option value="work">Work</option>
            <option value="swim">Swim</option>
            <option value="eat">Eat</option>
            <option value="football">Football</option>
          </Select>
        </FormControl>
        <IconButton
          type="submit"
          border="black solid 1px"
          borderRadius="25px"
          margin={3}
          size="lg"
          aria-label="Add-new-time"
          icon={<AddIcon />}
        />
      </form>
    </Box>
  );
}

export default AddNewTime;
