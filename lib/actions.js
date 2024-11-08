'use server';

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";

export async function shareMeal(formData){
    function isInvalidValue(value){
        return value === null || value .trim() === '';
    }
    const meal={
      creator:formData.get('name'),
      title:formData.get('title'),
      creator_email:formData.get('email'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
    }
    if (isInvalidValue(meal.creator || meal.title || meal.creator_email || meal.summary || meal.instructions)||!meal.creator_email.includes('@')||!meal.image||meal.image.size === 0) {
        throw new Error('Invalid Meal Data');
    }
    await saveMeal(meal);
    redirect('/meals');
  }