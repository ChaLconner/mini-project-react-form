export function Comments({ comments }) {
    return (
        <div className="mt-4 pt-4 border-t border-gray-200">
            <p class="text-sm font-medium text-gray-500 mb-2">ความคิดเห็น:</p>
            <ul class="text-sm bg-gray-50 p-3 rounded-md">
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}