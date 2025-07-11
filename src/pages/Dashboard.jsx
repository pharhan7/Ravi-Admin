
import DashboardHeader from './DashboardHeader';
import UpcomingJobs from '../components/UpcomingJobs';
import TodayStats from '../components/TodayStats';
import JobsAssigned from '../components/JobsAssigned';
import Invoice from '../components/Invoice';
import IncomingJobsChart from '../components/IncomingJobsChart';
import PaymentsSummary from '../components/PaymentsSummary';

const Dashboard = () => {
    return (
        <div className="p-6 space-y-6">
            <DashboardHeader />

            <div className="flex flex-wrap ">

                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <UpcomingJobs />
                        <TodayStats />
                        <JobsAssigned />
                        <Invoice />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6 px-4">
                    <IncomingJobsChart />
                    <PaymentsSummary />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
