'use client';
import { useFormStatus } from 'react-dom';
export default function MealsFormSubmit() {
    const {pending} = useFormStatus();
    return (
        <button disabled={pending} type="submit">{pending ? 'Sending...' : 'Share Meal'}</button>
    )
}