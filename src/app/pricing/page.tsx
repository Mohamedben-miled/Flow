
export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Day Pass */}
        <div className="rounded-lg border shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Day Pass</h2>
          <p className="text-4xl font-bold mb-4">10 TND/day</p>
          <p className="text-muted-foreground">
            Perfect for those who need a workspace for a day.
          </p>
          <button className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full">
            Book Now
          </button>
        </div>

        {/* Monthly Membership */}
        <div className="rounded-lg border shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Monthly Membership</h2>
          <p className="text-4xl font-bold mb-4">250 TND/month</p>
          <p className="text-muted-foreground">
            Ideal for regular coworkers seeking a consistent workspace.
          </p>
          <button className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full">
            Sign Up
          </button>
        </div>

        {/* Meeting Room */}
        <div className="rounded-lg border shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Meeting Room</h2>
          <p className="text-4xl font-bold mb-4">10 TND/hour</p>
          <p className="text-muted-foreground">
            Book our meeting room for team meetings or client presentations.
          </p>
          <button className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full">
            Reserve Now
          </button>
        </div>

        {/* Call Boxes */}
        <div className="rounded-lg border shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Call Boxes</h2>
          <p className="text-4xl font-bold mb-4">Free</p>
          <p className="text-muted-foreground">
            Enjoy private call boxes with free access for all members.
          </p>
          <button className="mt-4 bg-muted text-foreground py-2 px-4 rounded-md w-full disabled">
            Available
          </button>
        </div>
      </div>
    </div>
  );
}
