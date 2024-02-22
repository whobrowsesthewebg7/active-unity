import { useContext } from "react";

function TestTestemonialCard() {
  return (
    <>
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
          <h2 class="mb-12 text-3xl font-bold">See to what others have said</h2>

          <div class="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
            <div class="mb-6 lg:mb-0">
              <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                    class="w-full rounded-t-lg"
                  />
                  </div>
                <div class="p-6">
                  <h5 class="mb-2 text-lg font-bold">Halley Frank</h5>
                  <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                    Marketing Specialist
                  </h6>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium accusamus voluptatum deleniti
                    atque corrupti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TestTestemonialCard;
