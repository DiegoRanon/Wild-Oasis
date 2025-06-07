import supabase from "./supabase";
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) new Error(error.message);

  return data;
}
