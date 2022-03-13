import React from 'react';
import Link from 'next/link';
import { Page } from '../components/Page';
import { useForm } from 'react-hook-form';

// nextjs wont let you use named exports for pages
const Home = () => {
  // Reference: https://react-hook-form.com/get-started/
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // create the user
  const signupUser = (data) => {};

  // if they were successfully created
  // authenticate them, using the credentials they provided
  const authenticateUser = (data) => {
    // if successful, then send the user to the directions page
  };

  return (
    <Page>
      {/* box */}
      <div className="box">
        {/* heading */}
        <h1 className="page-title -mt-32">
          <span className="font-handwriting text-7xl block">free</span>{' '}
          Enneagram Assessment
        </h1>
        <h2 className="font-sans uppercase tracking-wider text-primary text-lg mb-4">
          Create an Account
        </h2>

        {/* form */}
        <form
          action=""
          className="relative pb-12 lg:pb-0 lg:grid grid-cols-3 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="name"
              {...register('name', { required: true })}
            />
            {errors.name && <div className="error">The name is required</div>}
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <div className="error">The email address field is required</div>
            )}
          </div>

          <div>
            <label htmlFor="passsword">Password</label>
            <input
              type="password"
              name="password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <div className="error">The password is required</div>
            )}
          </div>

          <div className="cols-span-3">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              {...register('terms', { required: true })}
            />
            {errors.terms && (
              <div className="error">Please accept our terms to continue</div>
            )}
            <label htmlFor="terms">
              I agree to your{' '}
              <Link href="/terms-and-conditions">
                <a>terms and conditions</a>
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            role="submit"
            className="button z-50 absolute -bottom-12 left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-0 w-44"
          >
            <span className="button-text">Submit</span>
          </button>
        </form>
      </div>
      <div className="absolute md:relative left-0 bottom-2 md:bottom-0 w-full text-center md:text-left md:pt-2">
        <Link href="/what-is">What is the Enneagram?</Link>
      </div>
    </Page>
  );
};

export default Home;
