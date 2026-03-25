
import { collection, getDocs, getFirestore, query, where  } from 'firebase/firestore';
import app from '../../firebaseConfig/config';
import { formatTotalTime } from './formatTotalTime';

export async function loadStatistics(userId) {
        const db = getFirestore(app)

        
        
        try {
        const testResultsRef = collection(db, 'testResults');
        const q = query(
            testResultsRef,
            where('userId', '==', userId)
        );
        
        const querySnapshot = await getDocs(q);
        
        let totalTestsCount = 0;
        let totalScoreSum = 0;
        let totalTimeSpent = 0;
        let today = new Date();
        let streakCount = 0;
        let lastTestDate = null;
        
        querySnapshot.forEach((doc) => {
            const testData = doc.data();
            totalTestsCount++;
            
            if (testData.score) {
                totalScoreSum += testData.score;
            }
            
            if (testData.timeSpent) {
                totalTimeSpent += testData.timeSpent;
            }
            
            // Calculate streak (simplified - checks if tests were taken on consecutive days)
            if (testData.timestamp) {
                const testDate = new Date(testData.timestamp.seconds * 1000);
                const testDay = testDate.toDateString();
                
                if (!lastTestDate) {
                    lastTestDate = testDate;
                    streakCount = 1;
                } else {
                    const diffDays = Math.floor((today - testDate) / (1000 * 60 * 60 * 24));
                    if (diffDays === streakCount) {
                        streakCount++;
                    }
                }
            }
        });
        
        // return Scores
        return ({
            totalTests:totalTestsCount,
            avgScore: totalTestsCount > 0 ? `${(totalScoreSum / totalTestsCount).toFixed(1)}%` : '0%',
            totalTime:formatTotalTime(totalTimeSpent),
            streak:streakCount
        });
        
        
        
    } catch (error) {
        console.error('Error loading statistics:', error);
    }
    }